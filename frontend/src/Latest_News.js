import React from "react"
import "./Latest_News.css"
import Navbar from "./Navbar";
import Menu from "./Menu";
import Commercial from "./Commercial";
import Card from "./Card";
import Bot from "./Bot";
import Main from "./Main";
export default function Latest_News(props){
    return(
        <div className="latest_news_body">
            <Navbar nav_value={props.value}/>
            <Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </div>
    )
}