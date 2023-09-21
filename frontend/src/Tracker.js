import React, {useEffect, useState} from "react"
import "./Tracker.css"

let symbols;
await fetch("/symbols").then((res)=>res.text())
        .then((text)=>
        {
            symbols = JSON.parse(JSON.parse(text));
        });

console.log(symbols)

export default function Tracker() {
    const style_crypto_tracker = {
        backgroundColor: localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "",
    }

    let [values, setValues] = useState(null);

    useEffect(() => {
        fetch("/price/BTC/w").then((res) => res.text())
            .then((text) => {
                const val = JSON.parse(text);
                setValues(val);
                values = val;
            });
    }, []);

    let str = "[{\"time\":1693519200,\"close\":25794.88},{\"time\":1693605600,\"close\":25867.83},{\"time\":1693692000,\"close\":25969.83},{\"time\":1693778400,\"close\":25816.13},{\"time\":1693864800,\"close\":25783.91},{\"time\":1693951200,\"close\":25581.94}]"

    //console.log(JSON.parse(str))
    return (
        <div className="crypto_tracker" style={style_crypto_tracker}>
            {}
        </div>
    )
}