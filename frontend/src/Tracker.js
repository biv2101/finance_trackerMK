import React from "react"
import "./Tracker.css"
export default function Tracker() {
    const style_crypto_tracker={
       backgroundColor:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "",
    }
    return(
        <div className="crypto_tracker" style={style_crypto_tracker}>

        </div>
    )
}