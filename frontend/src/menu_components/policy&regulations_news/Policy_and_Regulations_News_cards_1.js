import React from "react";
import "../Menu_cards.css";
export default function Policy_and_Regulations_News_cards_1(props){
    let timeStamp=1107110465663;
    const date= new Date(timeStamp);
    const dateFormat = date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString();
    return(
        <div className="menu_2_cards">
            <img src={`${props.img}`} className="menu_2_images" alt="Latest News"/>
            <div className="menu_2_container">
                <p className="news_time_stamp">{dateFormat}</p>
                <p className="menu_2_title">{props.category}</p>
                <div className="menu_2_title_container">
                    <a href={props.link} className="menu_2_links"><h3>{props.title}</h3></a>
                    <p className="menu_2_text">{props.text}
                    <span>...</span>
                    </p>
                </div>
            </div>
        </div>
    )
}