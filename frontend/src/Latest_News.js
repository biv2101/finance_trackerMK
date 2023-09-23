import React, {useEffect, useState} from "react"
import Object from "react"
import "./Latest_News.css"
import Navbar from "./Navbar";
import Menu from "./Menu";
import Commercial from "./Commercial";
import Card from "./Card";
import Bot from "./Bot";
import Main from "./Main";


export default function Latest_News(props) {
    let [news, setValues] = useState(null);

    useEffect(() => {
        fetch("/news").then((res) => res.text())
            .then((text) => {
                const val = JSON.parse(text);
                const newv = JSON.parse(val);
                setValues(newv);
                news = newv;
            });
    }, []);


    return (
        <div className="latest_news_body">
            {news[1]}
            <Navbar nav_value={props.value}/>
            <Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </div>
    )
}