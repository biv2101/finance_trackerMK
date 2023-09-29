import React, {useEffect, useState} from "react";
import './App.css';
import Navbar from "./navbar_components/Navbar";
import Main from "./main_components/Main";
import Menu from "./menu_components/Menu";
import Bot from "./main_components/Bot";
import Card from "./main_components/Card";
import Commercial from "./main_components/Commercial";
import Tracker from "./main_components/Tracker";
import Hidden_Element from "./main_components/Hidden_Element";
import {motion} from "framer-motion";

function update(){
    console.log("in func")
    fetch("/update").then((res) => res.text())
            .then((text) => {
                console.log(text);
            });
}

update()
setInterval(update, 3600000)
export default function App() {

    useEffect(()=>{
        localStorage.setItem('darkTheme', 'false')
    }, [])

    const style_app={
        backgroundColor: localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
//     function Child(props: { name: string }) {
//     return null;
// }
    const [Count,setCount]=useState(0);
    //console.log("Parent rendered");
        return (
         <motion.div className="App" style={style_app}>
               {/*<div className="wrap">*/}
               {/*    <button onClick={()=>setCount(Count+1)}>Increase</button>*/}
               {/*    <p>Count:{Count}</p>*/}
               {/*    /!*<Child name={"ABCD"}/>*!/*/}
               {/*</div>*/}
            <Navbar/>
            <Hidden_Element/>
            <Commercial/>
            <Card/>
            <Bot/>
            <Tracker/>
            <Main/>
            <Menu/>
        </motion.div>
    );
}