import React, {useEffect} from "react";
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import Menu from "./Menu"
import Tracker from "./Tracker"
import Bot from "./Bot"
import Card from "./Card"
import Commercial from "./Commercial"
export default function App() {


    useEffect(()=>{
        localStorage.setItem('darkTheme', false)
    }, [])
    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
        return (
        <div className="App" style={style_app}>
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
