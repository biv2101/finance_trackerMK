import React from "react"
import "./Log_in_Page.css"
import {Link} from "react-router-dom";
import {ReactComponent as User} from "./User.svg";
import {ReactComponent as Lock} from "./Lock.svg";
export default function Log_in_Page(){
    //const location=useLocation()
    //const {value}=location.state;
    return(
        <div className="log_in_body">
            <div className="log_in_wrapper">
                <span className="bg_animate"></span>
                <span className="bg_animate_2"></span>
                <div className="form_box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" required/>
                            <label className="log_in_label">Username</label>
                            <User className="log_in_user"/>
                        </div>
                        <div className="input_box_1">
                            <input type="password" required/>
                            <label className="log_in_label">Password</label>
                            <Lock className="log_in_lock"/>
                        </div>
                        <button type="submit" className="log_in_btn">Login</button>
                        <div className="log_reg_link">
                            <p>Don't have an account? <Link to="/sign_up" className="register_link">Sign up</Link></p>
                            <p>Want to go back? <Link to="/" className="register_link">Home</Link></p>
                        </div>
                    </form>
                </div>
                <div className="info_text login">
                    <h2>Welcome back!</h2>
                    <p>To keep connected login with your personal email & password.</p>
                </div>
            </div>
        </div>
    )
}