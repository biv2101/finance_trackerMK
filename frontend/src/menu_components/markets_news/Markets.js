import React from "react"
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Card from "../../main_components/Card";
import Bot from "../../main_components/Bot";
import Hidden_Element from "../../main_components/Hidden_Element";
import Markets_News_Main from "../../main_components/news_mains/Markets_News_Main";
export default function Markets(){
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <div className="markets_body" style={style_app}>
            <Navbar/>
            <Hidden_Element/>
            <Markets_News_Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </div>
    )
}