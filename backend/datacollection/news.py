import requests
from bs4 import BeautifulSoup
import pandas as pd
import time, calendar

from sqlite3 import connect

news_list = []
#
# init_query = 'CREATE TABLE IF NOT EXISTS newstable (time TIMESTAMP, title VARCHAR(100), link VARCHAR(100));'
#
# cursor = connection.cursor()
# cursor.execute(init_query)
# connection.commit()


def retrieveNews():
    print("Function call!")
    connection = connect('newslist.db')
    dbdone = pd.read_sql('SELECT * FROM newstable', connection)
    current_GMT = time.gmtime()
    currentdate = calendar.timegm(current_GMT)
    urls = {"https://finance.yahoo.com/topic/stock-market-news/", "https://finance.yahoo.com/topic/yahoo-finance-originals", "https://finance.yahoo.com/topic/earnings", "https://finance.yahoo.com/live/politics/", "https://finance.yahoo.com/topic/economic-news", "https://finance.yahoo.com/topic/crypto/"}
    for url in urls:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        news_items = soup.find_all('h3', class_='Mb(5px)')

        for news_item in news_items:
            news_title = news_item.text.strip()
            news_link = news_item.a['href']
            news_list.append({'time': currentdate, 'title': news_title, 'link': "https://finance.yahoo.com/news" + news_link})


    url_nyt = {"https://www.nytimes.com/section/business", "https://www.nytimes.com/section/business/dealbook", "https://www.nytimes.com/section/business/economy", "https://www.nytimes.com/section/business/energy-environment", "https://www.nytimes.com/section/business/media", "https://www.nytimes.com/section/business/small-business", "https://www.nytimes.com/section/your-money", "https://www.nytimes.com/section/automobiles"}
    for url_n in url_nyt:
        response = requests.get(url_n)
        soup = BeautifulSoup(response.content, "html.parser")

        headlines = soup.find_all("a", class_="css-8hzhxf")

        for link in headlines:
            news_list.append({'time': currentdate, 'title': link.get_text(),'link': "https://www.nytimes.com" + link['href']})

    frame = pd.DataFrame(news_list)
    final = pd.concat([dbdone, frame])
    final.drop_duplicates(subset=['title'], inplace=True)

    final.to_sql('newstable', connection, if_exists="replace", index=False)
    connection.close()

retrieveNews()