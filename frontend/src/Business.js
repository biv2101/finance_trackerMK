import React from "react"
import Navbar from "./Navbar";
import Menu from "./Menu";
import Commercial from "./Commercial";
import Card from "./Card";
import Bot from "./Bot";
import Main from "./Main";
export default function Business(){
    return(
        <div className="business_body">
            <Navbar/>
            <Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </div>
    )
}