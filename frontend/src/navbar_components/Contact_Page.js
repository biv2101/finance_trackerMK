import React from "react"
import {useState} from "react";
import "./Contact_Page.css"
import {ReactComponent as Location} from "../images/images_svg/Location.svg";
import {ReactComponent as Email} from "../images/images_svg/E-mail.svg";
import {ReactComponent as Phone} from "../images/images_svg/Phone.svg";
import {ReactComponent as Facebook} from "../images/images_svg/Facebook.svg";
import {ReactComponent as Instagram} from "../images/images_svg/Instagram.svg";
import {ReactComponent as YouTube} from "../images/images_svg/YouTube.svg";
import {ReactComponent as X} from "../images/images_svg/X.svg";
import Background_Lines from "../images/images_png/contact_background.png";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export default function Contact_Page(){
    const Send_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
    }
    const Home_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 52,
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

    const [userData, setUserData]=useState(
        {
            FirstName: '', LastName: '', Email: '', Phone: '', Message: ''
        }
    )
    let name, value;
    console.log(userData);
    const data = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUserData({...userData, [name]:value});
    }
    const send = async (e) =>{
        const {FirstName, LastName, Email, Phone, Message}=userData;
        e.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                FirstName, LastName, Email, Phone, Message
            })
        }
        const res = await fetch('https://contact-page-mk-default-rtdb.europe-west1.firebasedatabase.app/Messages.json', option);
        if(res){
            alert('Message has been successfully sent');
            window.location.reload();
        }
    }
    return(
        <motion.div className="contact_body">
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
                            <li><a href="https://www.youtube.com/channel/UC1OKCgTUh5mBlG-nX2rzoDA"><YouTube className="media_image" style={style_icons}/></a></li>
                            <li><a href="https://twitter.com/FinaceTrackerMK"><X className="media_image" style={style_icons}/></a></li>
                        </ul>
                    </div>
                    <div className="contact_form" style={style_contact_form}>
                        <h2>Get in touch with us</h2>
                        <form className="form_box">
                            <div className="input_box w50">
                                <input
                                    type="text"
                                    style={style_input}
                                    name="FirstName"
                                    value={userData.FirstName}
                                    autoComplete='off'
                                    onChange={data}
                                    required
                                />
                                <span>First Name</span>
                            </div>
                            <div className="input_box w50">
                                <input
                                    type="text"
                                    style={style_input}
                                    name="LastName"
                                    value={userData.LastName}
                                    autoComplete='off'
                                    onChange={data}
                                    required
                                />
                                <span>Last Name</span>
                            </div>
                            <div className="input_box w50">
                                <input
                                    type="email"
                                    style={style_input}
                                    name="Email"
                                    value={userData.Email}
                                    autoComplete='off'
                                    onChange={data}
                                    required
                                />
                                <span>Email</span>
                            </div>
                            <div className="input_box w50">
                                <input
                                    type="text"
                                    style={style_input}
                                    name="Phone"
                                    value={userData.Phone}
                                    autoComplete='off'
                                    onChange={data}
                                    required
                                />
                                <span>Phone number</span>
                            </div>
                            <div className="input_box w100">
                                <textarea
                                    style={style_input}
                                    name="Message"
                                    value={userData.Message}
                                    autoComplete='off'
                                    onChange={data}
                                    required
                                ></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div className="input_box w100">
                                <button type="submit" value="Send" className="send_button" onClick={send} style={Send_style}>Submit</button>
                            </div>
                        </form>
                        <Link style={Home_style} to="/" id="home_button">Home</Link>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}