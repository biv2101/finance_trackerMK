import React from "react";
import {ReactComponent as Code_1} from "./qr-code.svg";
import qr_dark from "./qr-code-dark.png";
import qr_white from "./qr-code-white.png";
import "./QR_Code.css";
export default function QR_Code(){
    const style_code={
        filter:localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_drop_down_content={
        backgroundColor:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
        border:localStorage.getItem("darkTheme") ? "2px solid ghostwhite" : "2px solid #373735",
        backgroundImage:localStorage.getItem("darkTheme") ? `url(${qr_dark})`: `url(${qr_white})`,
        backgroundSize: '150px',
    }
    const style_drop_down_text={
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_background_border={
        backgroundColor: localStorage.getItem("darkTheme") ? "darkgoldenrod" : "darkgoldenrod",
    }
    return(
            <div className="drop_down">
                <Code_1 className="code" style={style_code}/>
                <div className="drop_down_content" style={style_drop_down_content}>
                    <span className="drop_down_text_1" style={style_drop_down_text}>Scan to Download App</span>
                    <span className="drop_down_text_2" style={style_drop_down_text}>IOS & Android</span>
                    <span className="drop_down_border" style={style_background_border}></span>
                </div>
            </div>
    )
}