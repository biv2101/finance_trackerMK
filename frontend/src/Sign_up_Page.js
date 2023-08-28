import React from "react"
import "./Sign_up_Page.css"
import {Link} from "react-router-dom";
import {ReactComponent as User} from "./User.svg";
import {ReactComponent as Lock} from "./Lock.svg";
import {ReactComponent as Email} from "./Email.svg";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Sign_up_Page(){

    /* global username */
    /* global email */
    /* global password */

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signUpUser = () =>
    {
        axios.post('http://192.168.100.5:3000/sign_up', {
            user: user,
            email: email,
            password: password
        })
            .then(function (response)
            {
                console.log(response);
                navigate("/")
            })
            .catch(function (error)
            {
                console.log(error, 'error');
                if (error.response.status === 401){
                    alert("Invalid credentials");
                }
            });
    };


    return(
        <div className="log_in_body">
            <div className="log_in_wrapper">
                <span className="bg_animate_3"></span>
                <span className="bg_animate_4"></span>
                <div className="form_box register">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" required value={user} onChange={(e) => setUser(e.target.value)}/>
                            <label className="log_in_label">Username</label>
                            <User className="log_in_user"/>
                        </div>
                        <div className="input_box_1">
                            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label className="log_in_label">Email</label>
                            <Email className="log_in_email"/>
                        </div>
                        <div className="input_box_1">
                            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label className="log_in_label">Password</label>
                            <Lock className="log_in_lock"/>
                        </div>
                        <button type="submit" className="log_in_btn" onClick={signUpUser()}>Sign Up</button>
                        <div className="log_reg_link">
                            <p>Already have an account? <Link to="/log_in" className="login_link">Log in</Link></p>
                            <p>Want to go back? <Link to="/" className="register_link">Home</Link></p>
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