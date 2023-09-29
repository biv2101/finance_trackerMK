import React from "react"
import Navbar from "../../navbar_components/Navbar";
import Commercial from "../../main_components/Commercial";
import Menu from "../Menu";
import Card from "../../main_components/Card";
import Bot from "../../main_components/Bot";
import {motion} from "framer-motion";
import Hidden_Element from "../../main_components/Hidden_Element";
import Policy_and_Regulations_News_Main from "../../main_components/news_mains/Policy_and_Regulations_News_Main";

export default function Policy_and_Regulations(){
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <motion.div className="policy_body" style={style_app}>
            <Navbar/>
            <Hidden_Element/>
            <Policy_and_Regulations_News_Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </motion.div>
    )
}