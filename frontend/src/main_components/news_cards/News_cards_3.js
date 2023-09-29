import React from "react";
import "./News_cards.css"
export default function News_card(props){
    return(
        <div className="news_cards">
            <img src={`${props.img}`} className="news_images" alt="News"/>
            <a href={props.link} className="news_links"><h3>{props.title}</h3></a>
        </div>
    )
}