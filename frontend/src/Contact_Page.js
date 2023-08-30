import React from "react"
import "./Contact_Page.css"
import {ReactComponent as Location} from "./Location.svg";
import {ReactComponent as Email} from "./E-mail.svg";
import {ReactComponent as Phone} from "./Phone.svg";
import {ReactComponent as Facebook} from "./Facebook.svg";
import {ReactComponent as Instagram} from "./Instagram.svg";
import {ReactComponent as TikTok} from "./TikTok.svg";
import {ReactComponent as X} from "./X.svg";
import Background_Lines from "./contact_background.png";
import {Link, useLocation} from "react-router-dom";
import qr_dark from "./qr-code-dark.png";
export default function Contact_Page(){
    const Home_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 52,
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "#59594F",
    }
    const style_contact_section={
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
        backgroundImage:localStorage.getItem("darkTheme") ? `url(${Background_Lines})` : `url(${Background_Lines})`,
    }
    const style_contact_info={
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
    }
    const style_contact_form={
        background:localStorage.getItem("darkTheme") ? "#59594F" : "#aca496",
    }
    const style_contact_li={
        color:localStorage.getItem("darkTheme") ? "whitesmoke" : "#1F1F1E",
    }
    const style_icons={
        filter:localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_input={
        backgroundColor:localStorage.getItem("darkTheme") ? "#59594F" : "#aca496",
    }
    const style_submit={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "#59594F",
    }
    return(
        <div className="contact_body">
            <section className="contact_section" style={style_contact_section}>
                <div className="contact_container">
                    <div className="contact_info" style={style_contact_info}>
                        <div>
                            <h2 className="contact_h2">Contact Info</h2>
                            <ul className="info">
                                <li className="contact_li">
                                    <span>
                                        <Location className="contact_image" style={style_icons}/>
                                    </span>
                                    <span style={style_contact_li}>ul.Rudzer Boshkovikj 16, P.O. 393,<br/>
                                    1000 Skopje, Republic of North Macedonia</span>
                                </li>
                                <li className="contact_li">
                                    <span>
                                        <Email className="contact_image" style={style_icons}/>
                                    </span>
                                    <a id="Email" href="mailto:finance_tracker_mk@yahoo.com" style={style_contact_li}>finance_tracker_mk@yahoo.com</a>
                                </li>
                                <li className="contact_li">
                                    <span>
                                        <Phone className="contact_image" style={style_icons}/>
                                    </span>
                                    <span style={style_contact_li}>+389 78-232-736 / 71-213-731</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="sci">
                            <li><a href="https://www.facebook.com/profile.php?id=100095598936177"><Facebook className="media_image" style={style_icons}/></a></li>
                            <li><a href="https://www.instagram.com/finance_tracker.mk/"><Instagram className="media_image" style={style_icons}/></a></li>
                            <li><a href="#"><TikTok className="media_image" style={style_icons}/></a></li>
                            <li><a href="https://twitter.com/FinaceTrackerMK"><X className="media_image" style={style_icons}/></a></li>
                        </ul>
                    </div>
                    <div className="contact_form" style={style_contact_form}>
                        <h2>Get in touch with us</h2>
                        <div className="form_box">
                            <div className="input_box w50">
                                <input type="text" required style={style_input}/>
                                <span>First Name</span>
                            </div>
                            <div className="input_box w50">
                                <input type="text" required style={style_input}/>
                                <span>Last Name</span>
                            </div>
                            <div className="input_box w50">
                                <input type="email" required style={style_input}/>
                                <span>E-mail Address</span>
                            </div>
                            <div className="input_box w50">
                                <input type="text" required style={style_input}/>
                                <span>Mobile Number</span>
                            </div>
                            <div className="input_box w100">
                                <textarea required style={style_input}></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div className="input_box w100">
                                <input type="submit" value="Send" style={style_submit}/>
                            </div>
                            <Link style={Home_style} to="/" id="home_button">Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}