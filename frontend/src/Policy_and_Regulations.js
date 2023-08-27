import React from "react"
import Navbar from "./Navbar";
import Commercial from "./Commercial";
import Menu from "./Menu";
import Card from "./Card";
import Bot from "./Bot";
import Main from "./Main";
export default function Policy_and_Regulations(){
    return(
        <div className="policy_body">
            <Navbar/>
            <Main/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Menu/>
        </div>
    )
}