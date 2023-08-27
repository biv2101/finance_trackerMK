import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlite3 import connect

news_list = []

connection = connect('newslist.db')
init_query = 'CREATE TABLE IF NOT EXISTS newstable (title VARCHAR(100), link VARCHAR(100));'

cursor = connection.cursor()
cursor.execute(init_query)
connection.commit()

urls = {"https://finance.yahoo.com/topic/stock-market-news/", "https://finance.yahoo.com/topic/yahoo-finance-originals", "https://finance.yahoo.com/topic/earnings", "https://finance.yahoo.com/live/politics/", "https://finance.yahoo.com/topic/economic-news", "https://finance.yahoo.com/topic/crypto/"}

for url in urls:
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')

  news_items = soup.find_all('h3', class_='Mb(5px)')
  # print(news_items)

  for news_item in news_items:
    news_title = news_item.text.strip()
    news_link = news_item.a['href']
    news_list.append({'title': news_title,'link': "https://finance.yahoo.com/news" + news_link})

# print(news_list)

url_nyt = {"https://www.nytimes.com/section/business", "https://www.nytimes.com/section/business/dealbook", "https://www.nytimes.com/section/business/economy", "https://www.nytimes.com/section/business/energy-environment", "https://www.nytimes.com/section/business/media", "https://www.nytimes.com/section/business/small-business", "https://www.nytimes.com/section/your-money", "https://www.nytimes.com/section/automobiles"}
for url_n in url_nyt:
  response = requests.get(url_n)
  soup = BeautifulSoup(response.content, "html.parser")

  headlines = soup.find_all("a", class_="css-8hzhxf") # WSJTheme--headline--unZqjb45 reset

  for link in headlines:
    news_list.append({'title': link.get_text(),'link': "https://www.nytimes.com" + link['href']})

frame = pd.DataFrame(news_list)

url_cnn = {"https://edition.cnn.com/business/investing"}

response = requests.get(url_cnn)
# print(response.status_code)
soup = BeautifulSoup(response.content, "html.parser")

headlines = soup.find_all("a", class_="container__link container_lead-plus-headlines-with-images__link")
# print(headlines)

for link in headlines:
  news_list.append({'title': link.get_text().strip(),'link': link['href']})

frame = pd.DataFrame(news_list)

frame.to_sql('newstable', connection, if_exists='append', index=False)