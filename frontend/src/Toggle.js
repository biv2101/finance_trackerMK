import React from "react";
import "./Toggle.css";
const ToggleSwitch = (props) => {
    return (
        <div className="container">
            {props.label}{" "}
            <div className="toggle_switch">
                <input onChange={() => {
                let darkTheme=localStorage.getItem('darkTheme')
                if(darkTheme === 'true'){
                    localStorage.setItem('darkTheme','false')
                }
                else{
                    localStorage.setItem('darkTheme', 'true')
                }
                }}
                       type="checkbox" className="checkbox"
                       name={props.label} id={props.label} />
                <label className="label" htmlFor={props.label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};
export default ToggleSwitch;