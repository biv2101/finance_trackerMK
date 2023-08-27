import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle";
import QR_Code from "./QR_Code";
import {ReactComponent as Logo_1} from "./Navbar_Logo_1.svg";
import {ReactComponent as Logo_2} from "./Navbar_Logo_2.svg";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <ul className="navbar">
                        {localStorage.getItem('darkTheme') ? <Logo_1 className="navbar_logo"/> : <Logo_2 className="navbar_logo"/>}
                        <li>
                            <Link to="/" className="navbar_text">Home</Link>
                        </li>
                        <li>
                            <Link to="/f.a.g." className="navbar_text">F.A.Q.</Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbar_text">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navbar_text">Contact</Link>
                        </li>
                        <QR_Code/>
                        <Link to="/log_in" className="log_in" role="button">Log In</Link>
                        <Link to="/sign_up" className="sign_up" role="button" >Register</Link>
                        <Toggle label="|"/>
                    </ul>
                </div>
            </nav>
        </div>
    )
}