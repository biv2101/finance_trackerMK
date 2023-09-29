import React from "react"
import "../Menu_Components.css"
import Navbar from "../../navbar_components/Navbar";
import Menu from "../Menu";
import Commercial from "../../main_components/Commercial";
import Card from "../../main_components/Card";
import Bot from "../../main_components/Bot";
import Latest_News_Main from "../../main_components/news_mains/Latest_News_Main";
import {motion} from "framer-motion";
import Hidden_Element from "../../main_components/Hidden_Element";

export default function Latest_News(props){
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <motion.div className="latest_news_body" style={style_app}>
            <Navbar nav_value={props.value}/>
            <Hidden_Element/>
            <Latest_News_Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </motion.div>
    )
}