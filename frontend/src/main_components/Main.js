import React from "react";
import "./Main.css";
import {NewsData} from "./News_info";
import News_Card from "./news_cards/News_card";
import News_Card_1 from "./news_cards/News_cards_1";
import News_Card_2 from "./news_cards/News_cards_2";
import News_Card_3 from "./news_cards/News_cards_3";
import News_Card_4 from "./news_cards/News_cards_4";
export default function Main(){
    const style_main= {
        backgroundColor: localStorage.getItem("darkTheme") ? "transparent" : "ghostwhite",
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const card = NewsData.slice(0,1).map(item => {
        return (
            <News_Card
                key={item.link}
                {...item}
            />
        )
    })
    const Cards_1 = NewsData.slice(1,2).map(item => {
        return (
            <News_Card_1
                key={item.link}
                {...item}
            />
        )
    })
    const Cards_2 = NewsData.slice(2,3).map(item => {
        return (
            <News_Card_2
                key={item.link}
                {...item}
            />
        )
    })
    const Cards_3 = NewsData.slice(3,4).map(item => {
        return (
            <News_Card_3
                key={item.link}
                {...item}
            />
        )
    })
    const Cards_4 = NewsData.slice(4,5).map(item => {
        return (
            <News_Card_4
                key={item.link}
                {...item}
            />
        )
    })
    {
            return (
                <div>
                    <main className="main" style={style_main}>
                        <div className="child_element">
                            {card}
                            <div className="news">
                                {Cards_1}
                                {Cards_2}
                                {Cards_3}
                                {Cards_4}
                            </div>
                        </div>
                    </main>
                    <span className="copyright"
                          style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
                </div>
            );
        }
    }
