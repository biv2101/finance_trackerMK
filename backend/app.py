from flask import Flask, request, jsonify, session, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from models import db, User
import requests

app = Flask(__name__)

app.config['SECRET_KEY'] = 'asdsdfaesadasdasdewq'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userbase.db'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=False)
db.init_app(app)
headers = {"Content-Type": "application/json"}

with app.app_context():
    db.create_all()

@app.route("/sign_up", methods=['POST', 'GET'])
def signup():
    # data = requests.get("http://192.168.100.5:3000/sign_up", headers=headers).json()
    # if request.is_json == True:
    data = request.get_json()
    # else:
    #     print("data is not json")
    #     return

    user = data['user']
    email = data['email']
    password = data['password']

    user_exists = User.query.filter_by(user=user).first is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_pw = bcrypt.generate_password_hash(password)
    new_user = User(user=user, email=email, password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id
    responsedata = {
            "id": new_user.id,
            "user": new_user.user,
            "email": new_user.email
        }

    return jsonify(result=responsedata)

@app.route("/login", methods=['POST','GET'])
def login():
    username = request.json["user"]
    password = request.json["password"]

    user = User.query.filter_by(user=username).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id

    responsedata = jsonify({
        "id": user.id,
        "user": user.user
    })
    response = requests.post("/login", headers=headers, data=responsedata)


if  __name__ == '__main__':
    app.run()