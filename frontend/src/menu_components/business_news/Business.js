import React from "react"
import Navbar from "../../navbar_components/Navbar";
import Menu from "../Menu";
import Commercial from "../../main_components/Commercial";
import Card from "../../main_components/Card";
import Bot from "../../main_components/Bot";
import {motion} from "framer-motion";
import Hidden_Element from "../../main_components/Hidden_Element";
import Business_News_Main from "../../main_components/news_mains/Business_News_Main";

export default function Business(){
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <motion.div className="business_body" style={style_app}>
            <Navbar/>
            <Hidden_Element/>
            <Business_News_Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </motion.div>
    )
}