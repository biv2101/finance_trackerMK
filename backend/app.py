import calendar
import sqlite3
import time
import uuid
from sqlite3 import connect

import bcrypt
import pandas as pd
import schedule
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, request, jsonify, url_for
from flask_cors import CORS

app = Flask(__name__)

CORS(app, supports_credentials=False)
scheduler = BackgroundScheduler()


def Convert(tup, di):
    di = dict(tup)
    return di


salted = bcrypt.gensalt()

conn = connect('datacollection/symbolb.db')
cursor = conn.cursor()

cursor.execute("SELECT sym FROM symbase;")
symbols = [symbols[0] for symbols in cursor.fetchall()]

cursor.execute("SELECT sym FROM tickbase;")
tickers = [tickers[0] for tickers in cursor.fetchall()]


def gather():
    print("Gathering news...")
    print("Finished!")


@app.route("/news", methods=['POST', 'GET'])
def news():
    schedule.run_pending()
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    curs.execute("SELECT title, link FROM newstable")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["title", "link"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp


@app.route("/news/<keyword>", methods=['POST', 'GET'])
def news_search(keyword):
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    res = curs.execute("SELECT title, link FROM newstable WHERE title LIKE '%" + keyword + "%'")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["title", "link"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp


@app.route("/price/<symbol>", methods=['POST', 'GET'])
def send(symbol):
    connection = connect('datacollection/symbolsprices.db')
    connection.row_factory = sqlite3.Row
    curs = connection.cursor()

    res = curs.execute("SELECT time, close FROM " + symbol)

    df = pd.DataFrame(res, columns=["time", "close"])
    jsonce = df.to_json(orient="records")
    resp = jsonify(jsonce)
    resp.status_code = 200
    return resp


@app.route("/price/<symbol>/<ts>", methods=['POST', 'GET'])
def sendts(symbol, ts):
    connection = connect('datacollection/symbolsprices.db')
    connection.row_factory = sqlite3.Row
    curs = connection.cursor()

    current_GMT = time.gmtime()
    minusdate = calendar.timegm(current_GMT)

    if ts == "w":
        minusdate -= 8 * 86400
    elif ts == "m":
        minusdate -= 31 * 86400
    elif ts == "y":
        minusdate -= 366 * 86400
    elif ts == "5y":
        minusdate -= 5 * 366 * 86400
    elif ts == "ld":
        minusdate -= 2 * 86400
    res = curs.execute("SELECT time, close FROM " + symbol + " WHERE time >= " + str(minusdate))

    df = pd.DataFrame(res, columns=["time", "close"])
    jsonce = df.to_json(orient="records")
    resp = jsonify(jsonce)
    resp.status_code = 200
    return resp


@app.route("/sign_up", methods=['POST', 'GET'])
def signup():
    # print(data)
    ub_conn = connect("userbase.db")
    ub_curs = ub_conn.cursor()

    rstring = "good"
    rstatus = 200
    data = request.get_json()
    print(data)

    user = data['user']
    email = data['email']
    password = data['password']

    ub_curs.execute("SELECT * FROM users WHERE username = '" + user + "'")

    users_list = ub_curs.fetchall()
    if len(users_list) > 0:
        rstring = "username taken"
        rstatus = 409

    ub_curs.execute("SELECT * FROM users WHERE email = '" + email + "'")
    email_list = ub_curs.fetchall()
    if len(email_list) > 0:
        rstring = "email taken"
        rstatus = 410

    if rstatus == 200:
        userid = uuid.uuid4()
        pw = bcrypt.hashpw(password.encode('utf-8'), salted)
        sql = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)"
        val = (str(userid), str(user), str(email), str(pw))
        ub_curs.execute(sql, val)
        ub_conn.commit()
        response = jsonify({"user": user, "email": email, "password": password})
        response.status_code = 200
        response.headers.add('Content-Type', 'application/json')
    else:
        response = jsonify(rstring)
        response.status_code = rstatus

    ub_conn.close()
    return response


@app.route("/login", methods=['POST', 'GET'])
def login():
    ub_conn = connect("userbase.db")
    ub_curs = ub_conn.cursor()

    rstring = "good"
    rstatus = 200
    data = request.get_json()
    print(data)

    user = data['user']
    password = data['password']

    ub_curs.execute("SELECT * FROM users WHERE username = '" + user + "'")

    users_list = ub_curs.fetchall()
    if len(users_list) == 0:
        rstring = "user doesn't exist"
        rstatus = 409

    print(users_list)

    if rstatus == 200:
        if bcrypt.checkpw(users_list[0][3].encode('utf-8'), bcrypt.hashpw(password.encode('utf-8'), salted)):
            response = jsonify({"user": user, "password": password})
            response.status_code = 200
            response.headers.add('Content-Type', 'application/json')
        else:
            rstatus = 410
            rstring = "wrong password"
            ub_conn.close()
            response = jsonify(rstring)
            response.status_code = rstatus
            return response
    else:
        response = jsonify(rstring)
        response.status_code = rstatus

    ub_conn.close()
    return response


@app.route('/symbols', methods=['GET', 'POST'])
def symbols():
    sconnection = connect('datacollection/symbolb.db')
    conncurs = sconnection.cursor()

    conncurs.execute("SELECT sym from symbase")
    symres = [symres[0] for symres in conncurs.fetchall()]

    df = pd.DataFrame(symres)

    conncurs.execute("SELECT sym from tickbase")
    tickres = [tickres[0] for tickres in conncurs.fetchall()]


    df2 = pd.DataFrame(tickres)

    final = pd.concat([df, df2])

    listicka = symres+tickres

    jsonce = final.to_json(orient='records')
    response = jsonify(listicka)
    response.status_code = 200
    return response


if __name__ == '__main__':
    app.run()
    gather()
    with app.test_request_context():
        for sym in symbols:
            url_sym = url_for('send', symbol=sym)
            url_sym_date = url_for('sendts', symbol=sym, ts="")
        for tick in tickers:
            url_sym = url_for('send', symbol=tick)
            url_sym_date = url_for('sendts', symbol=tick, ts="")

        url_news = url_for('news_search', keyword="")
