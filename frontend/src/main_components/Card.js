import React from "react";
import "./Card.css"
export default function Card(){
    const Card_style={
        textDecoration: 'none',
        color: 'ghostwhite',
    }
    return(
        <div className="card 1">
            <div className="card_image">
                <img src={require('../images/images_png/finki_photo.png')} alt="FINKI"/>
            </div>
            <div className="card_title title-white">
                <button className="card_link">
                    <a style={Card_style} href="https://www.finki.ukim.mk">Learn more</a>
                </button>
            </div>
        </div>
    )
}