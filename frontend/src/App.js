import React from "react";
import {useState} from "react";
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import Menu from "./Menu"
import Tracker from "./Tracker"
import Bot from "./Bot"
import Card from "./Card"
import Commercial from "./Commercial"
function App() {
    const [theme, setTheme]=useState("dark");
        return (
        <div className="App" id={theme}>
            <Navbar value={theme} handleOnChange={setTheme}/>
            <Main value={theme}/>
            <Card value={theme}/>
            <Tracker value={theme}/>
            <Bot value={theme}/>
            <Commercial value={theme}/>
            <Menu value={theme}/>
        </div>
    );
}
export default App;

