import React from "react";
import {ReactComponent as Code_1} from "./qr-code.svg";
import "./QR_Code.css"
export default function QR_Code(props){
    const{qr_value}=props
    return(
            <div className="drop_down">
                <Code_1 className="code"/>
                <div className="drop_down_content">
                    <span className="drop_down_text_1">Scan to Download App</span>
                    <span className="drop_down_text_2">IOS & Android</span>
                    <span className="drop_down_border"></span>
                </div>
            </div>
    )
}