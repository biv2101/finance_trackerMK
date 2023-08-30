import React from "react";
import {ReactComponent as User} from "./User.svg";
import "./Commercial.css"
import {Link} from "react-router-dom";
export default function Commercial(){
    const Commercial_style= {
        textDecoration: 'none',
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_web_commercial={
        backgroundColor:localStorage.getItem("darkTheme") ? "goldenrod" : "#f6e174",
    }
    return(
        <div className="web_commercial" style={style_web_commercial}>
            <User className="user_icon"/>
            <Link style={Commercial_style} to="/log_in" className="web_text">Sign up now & keep track of all your favorite stocks</Link>
        </div>
    )
}