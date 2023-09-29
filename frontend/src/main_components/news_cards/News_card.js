import React, {useState} from "react";
import "./News_cards.css"
import {ReactComponent as Arrow} from "../../images/images_svg/Chevron_right.svg";
import {ReactComponent as Arrow_gold} from "../../images/images_svg/Chevron_right_gold.svg";
//import Image_Array from "./Image_Array";
export default function News_card(props){
    //const images_array=Image_Array.data.images;
    //const RandomNumber_1=Math.floor(Math.random() * images_array.length);
    //let random_image=images_array[RandomNumber_1].src;
    //console.log(random_image);
    const read_more_style={
        textDecoration: "none",
        fontSize: 13,
        color: "goldenrod",

    }
    let timeStamp=1107110465663;
    const date= new Date(timeStamp);
    const dateFormat = date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString();
    return(
        <div className="news_card">
            <img src={`${props.img}`} className="news_image" alt="News"/>
            <div className="blur">
                <p className="news_time">{dateFormat}</p>
                <p className="news_2_title">Global News</p>
                <p className="news_link"></p>
                <h3 className="news_link">{props.title}</h3>
                <br/>
                <h5>{props.text}
                     <span>...</span>
                </h5>
                <Arrow_gold className="arrow"/>
                <a href={props.link} className="read_more" style={read_more_style}>Read more</a>
            </div>
        </div>
    )
}