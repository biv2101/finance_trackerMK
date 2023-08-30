import React from "react"
import "./Log_in_Page.css"
import {Link} from "react-router-dom";
import {ReactComponent as User} from "./User.svg";
import {ReactComponent as Lock} from "./Lock.svg";
export default function Log_in_Page(){
    const style_login_body={
        background:localStorage.getItem("darkTheme") ? "linear-gradient(to bottom, #1F1F1E, #59594F, #373735)" : "linear-gradient(to bottom, grey, ghostwhite, lightgrey)",
    }
    const style_log_reg_link={
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_login_buttons={
        textDecoration: 'none',
    }
    const style_log_in={
        color: localStorage.getItem("darkTheme") ? "darkgoldenrod" : "darkgoldenrod",
    }
    const style_icons={
        invert: localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_log_in_label={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_input={
        borderBottom: localStorage.getItem("darkTheme") ? "2px solid ghostwhite" : "2px solid #aca496",
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    return(
        <div className="log_in_body" style={style_login_body}>
            <div className="log_in_wrapper">
                <span className="bg_animate"></span>
                <span className="bg_animate_2"></span>
                <div className="form_box login">
                    <h2 style={style_log_in}>Login</h2>
                    <form action="#">
                        <div className="input_box_1">
                            <input type="text" required style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Username</label>
                            <User className="log_in_user" style={style_icons}/>
                        </div>
                        <div className="input_box_1">
                            <input type="password" required style={style_input}/>
                            <label className="log_in_label" style={style_log_in_label}>Password</label>
                            <Lock className="log_in_lock" style={style_icons}/>
                        </div>
                        <button type="submit" className="log_in_btn">Login</button>
                        <div className="log_reg_link" style={style_log_reg_link}>
                            <p>Don't have an account? <Link to="/sign_up" className="register_link" style={style_login_buttons}>Sign up</Link></p>
                            <p>Want to go back? <Link to="/" className="register_link" style={style_login_buttons}>Home</Link></p>
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