import React from "react"
import "./Latest_News.css"
import Navbar from "./Navbar";
export default function Latest_News(props){
    return(
        <Navbar nav_value={props.value}/>
    )
}