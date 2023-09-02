import React from "react"
import "./Sign_up_Page.css"
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as User} from "./User.svg";
import {ReactComponent as Lock} from "./Lock.svg";
import {ReactComponent as Email} from "./Email.svg";

export default function Sign_up_Page() {


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    /* eslint-env jquery */

    const signUpUser = () => {
        axios.post('http://192.168.100.5:3000/sign_up', {
                user: user,
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response);
                navigate("/sign_up")
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
    };

    function sendData() {
        var user1 = document.getElementById('user').value;
        var email1 = document.getElementById('email').value;
        var password1 = document.getElementById('password').value;
        $.ajax({
            url: '/sign_up',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({'user': user1, "email": email1, "password": password1}),
            success: function (response) {
                console.log("asda");
                // document.getElementById('output').innerHTML = response.result;
            },
            error: function (error) {
                console.log(error);
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
        invert: localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_log_in_label = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_input = {
        borderBottom: localStorage.getItem("darkTheme") ? "2px solid ghostwhite" : "2px solid #aca496",
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    return (
        <div className="log_in_body" style={style_login_body}>
            <div className="log_in_wrapper">
                <span className="bg_animate_3"></span>
                <span className="bg_animate_4"></span>
                <div className="form_box register">
                    <h2 style={style_sign_up}>Sign Up</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" required value={user} id={user} onChange={(e) => setUser(e.target.value)}
                                   style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Username</label>
                            <User className="log_in_user" style={style_icons}/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" required value={email} id={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Email</label>
                            <Email className="log_in_email" style={style_icons}/>
                        </div>
                        <div className="input_box_1">
                            <input type="password" required value={password} id={password}
                                   onChange={(e) => setPassword(e.target.value)} style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Password</label>
                            <Lock className="log_in_lock" style={style_icons}/>
                        </div>
                        <button type="submit" className="log_in_btn" onClick={sendData}>Sign Up</button>
                        <div className="log_reg_link">
                            <p style={style_paragraph}>Already have an account? <Link to="/log_in"
                                                                                      className="login_link"
                                                                                      style={style_login_buttons}>Log
                                in</Link></p>
                            <p style={style_paragraph}>Want to go back? <Link to="/" className="register_link"
                                                                              style={style_login_buttons}>Home</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="info_text register">
                    <h2>Create account!</h2>
                    <p>Enter your personal details and start a journey with us.</p>
                </div>
            </div>
        </div>
    )
}