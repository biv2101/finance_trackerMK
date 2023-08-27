import React from "react";
import "./Card.css"
export default function Card(props){
    const Card_style={
        textDecoration: 'none',
        color: 'ghostwhite',
    }
    return(
        <div className="card_container">
            <button className="card_link">
                <a style={Card_style} href="https://www.finki.ukim.mk">Learn more</a>
            </button>
        </div>
    )
}