import React, {useState} from "react";
import "./Subscribe.css";
import {ReactComponent as Email} from "../images/images_svg/Email.svg";
import {ReactComponent as User_ID} from "../images/images_svg/Name_and_Surname.svg";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {asad} from "./Code_Page";

export default function Subscribe_Page() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    function signUpUser() {
        axios.post('/subscribe', {
                name: name,
                surname: surname,
                email: email
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }

            },
        )
            .then(function (response) {
                console.log(response);
                asad(email)
                navigate("/code")
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 410) {
                    alert("Already subscribed");
                }
            });
    }

    const style_login_body = {
        background: localStorage.getItem("darkTheme") ? "linear-gradient(to bottom, #1F1F1E, #59594F, #373735)" : "linear-gradient(to bottom, grey, ghostwhite, lightgrey)",
    }
    const style_login_buttons = {
        textDecoration: 'none',
    }
    const style_paragraph = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_sign_up = {
        color: localStorage.getItem("darkTheme") ? "darkgoldenrod" : "darkgoldenrod",
    }
    const style_icons = {
        filter: localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_log_in_label = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_input = {
        borderBottom: localStorage.getItem("darkTheme") ? "2px solid ghostwhite" : "2px solid #aca496",
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }

    return (
        <div>
            <div className="animated_body">
                <div className="animated_wrapper">
                    <div className="animated_box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="subscribe_wrapper">
                <span className="bg_animate_3"></span>
                <span className="bg_animate_4"></span>
                <div className="form_box register">
                    <h2 style={style_sign_up}>Subscribe</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} required
                                   style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Name</label>
                            <User_ID className="log_in_user" style={style_icons}/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" value={surname} id="surname" onChange={(e) => setSurname(e.target.value)}
                                   required style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Surname</label>
                            <User_ID className="log_in_user" style={style_icons}/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}
                                   required style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Email</label>
                            <Email className="log_in_email" style={style_icons}/>
                        </div>
                        <button type="submit" className="log_in_btn" onClick={signUpUser}>Subscribe</button>
                        <div className="log_reg_link">
                            <p style={style_paragraph}>Want to go back? <Link to="/" className="register_link"
                                                                              style={style_login_buttons}>Home</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="info_text register">
                    <h2>Subscribe Now!</h2>
                    <p>Get the best tech news, crypto advice, unmissable stock prices and more.</p>
                </div>
            </div>
        </div>
    )
}
