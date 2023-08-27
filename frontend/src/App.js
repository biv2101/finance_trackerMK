import React, { useEffect } from "react";
import {useState} from "react";
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import Menu from "./Menu"
import Tracker from "./Tracker"
import Bot from "./Bot"
import Card from "./Card"
import Commercial from "./Commercial"
export default function App() {


    useEffect(() => {
        localStorage.setItem('darkTheme', false)
    }, [])
    
        return (
        <div className="App">
            <Navbar/>
            <Main/>
            <Card/>
            <Tracker/>
            <Bot/>
            <Commercial/>
            <Menu/>
        </div>
    );
}
