import React from "react"
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Card from "../../main_components/Card";
import Bot from "../../main_components/Bot";
import {motion} from "framer-motion";
import Hidden_Element from "../../main_components/Hidden_Element";
import Technology_News_Main from "../../main_components/news_mains/Technology_News_Main";

export default function Technology(){
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <motion.div className="technology_body" style={style_app}>
            <Navbar/>
            <Hidden_Element/>
            <Technology_News_Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </motion.div>
    )
}