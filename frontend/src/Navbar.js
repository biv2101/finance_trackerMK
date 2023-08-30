import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle";
import QR_Code from "./QR_Code";
import {ReactComponent as Logo_1} from "./Navbar_Logo_1.svg";
import {ReactComponent as Logo_2} from "./Navbar_Logo_2.svg";
import {Link} from "react-router-dom";
export default function Navbar() {
    const style_navbar={
        backgroundColor:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
    }
    const style_link={
        color:localStorage.getItem("darkTheme") ? "#aca496" : "#1F1F1E",
    }
    const style_navbar_buttons={
        backgroundColor:localStorage.getItem("darkTheme") ? "goldenrod" : "rgba(245,229,27,1)",
        border:localStorage.getItem("darkTheme") ? "1px solid darkgoldenrod" : "1px solid gold",
    }
    return (
        <div>
            <nav>
                <div>
                    <ul className="navbar" style={style_navbar}>
                        {localStorage.getItem('darkTheme')===true ? <Logo_1 className="navbar_logo"/> : <Logo_2 className="navbar_logo"/>}
                        <li>
                            <Link to="/" className="navbar_text" style={style_link}>Home</Link>
                        </li>
                        <li>
                            <Link to="/f.a.g." className="navbar_text" style={style_link}>F.A.Q.</Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbar_text" style={style_link}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navbar_text" style={style_link}>Contact</Link>
                        </li>
                        <QR_Code/>
                        <Link to="/log_in" className="log_in" role="button" style={style_navbar_buttons}>Log In</Link>
                        <Link to="/sign_up" className="sign_up" role="button" style={style_navbar_buttons}>Register</Link>
                        <Toggle label="|"/>
                    </ul>
                </div>
            </nav>
        </div>
    )
}