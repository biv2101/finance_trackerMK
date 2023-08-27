import React from "react"
import "./Contact_Page.css"
import {ReactComponent as Location} from "./Location.svg";
import {ReactComponent as Email} from "./E-mail.svg";
import {ReactComponent as Phone} from "./Phone.svg";
import {ReactComponent as Facebook} from "./Facebook.svg";
import {ReactComponent as Instagram} from "./Instagram.svg";
import {ReactComponent as TikTok} from "./TikTok.svg";
import {ReactComponent as X} from "./X.svg";
import {ReactComponent as Github} from "./Github.svg";
import {Link, useLocation} from "react-router-dom";
export default function Contact_Page(){
    const Home_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 55,
    }
    return(
        <div className="contact_body">
            <section className="contact_section">
                <div className="contact_container">
                    <div className="contact_info">
                        <div>
                            <h2 className="contact_h2">Contact Info</h2>
                            <ul className="info">
                                <li className="contact_li">
                                    <span>
                                        <Location className="contact_image"/>
                                    </span>
                                    <span>ul.Rudzer Boshkovikj 16, P.O. 393,<br/>
                                    1000 Skopje, Republic of North Macedonia</span>
                                </li>
                                <li className="contact_li">
                                    <span>
                                        <Email className="contact_image"/>
                                    </span>
                                    <a id="Email" href="mailto:finance_tracker_mk@yahoo.com">finance_tracker_mk@yahoo.com</a>
                                </li>
                                <li className="contact_li">
                                    <span>
                                        <Phone className="contact_image"/>
                                    </span>
                                    <span>+389 78-232-736 / 71-213-731</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="sci">
                            <li><a href="https://www.facebook.com/profile.php?id=100095598936177"><Facebook className="media_image"/></a></li>
                            <li><a href="https://www.instagram.com/finance_tracker.mk/"><Instagram className="media_image"/></a></li>
                            <li><a href="#"><TikTok className="media_image"/></a></li>
                            <li><a href="#"><X className="media_image"/></a></li>
                            <li><a href="#"><Github className="media_image"/></a></li>
                        </ul>
                    </div>
                    <div className="contact_form">
                        <h2>Get in touch with us</h2>
                        <div className="form_box">
                            <div className="input_box w50">
                                <input type="text" required/>
                                <span>First Name</span>
                            </div>
                            <div className="input_box w50">
                                <input type="text" required/>
                                <span>Last Name</span>
                            </div>
                            <div className="input_box w50">
                                <input type="email" required/>
                                <span>E-mail Address</span>
                            </div>
                            <div className="input_box w50">
                                <input type="text" required/>
                                <span>Mobile Number</span>
                            </div>
                            <div className="input_box w100">
                                <textarea required></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div className="input_box w100">
                                <input type="submit" value="Send"/>
                            </div>
                            <Link style={Home_style} to="/" id="home_button">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}