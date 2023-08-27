import React from "react";
import "./F.A.Q._Page.css"
import {ReactComponent as Chevron} from "./Chevron.svg";

export default function FAQ_Page(){
    return(
        <div className="faq_body">
            <div className="faq_accordion">
                <div className="image_box">
                    <img src={require('./Log_in_background_image.png')} className="faq_image" alt="faq_picture"/>
                </div>
                <div className="faq_accordion_text">
                    <div className="faq_title">FAQ</div>
                <ul className="faq_text">
                    <li>
                        <div className="question_arrow">
                            <span className="faq_question">What do you mean by HTML & CSS</span>
                            <Chevron className="faq_chevron arrow"/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <span className="faq_line"></span>
                    </li>
                    <li>
                        <div className="question_arrow">
                            <span className="faq_question">What do you mean by Javascript</span>
                            <Chevron className="faq_chevron arrow"/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <span className="faq_line"></span>
                    </li>
                    <li>
                        <div className="question_arrow">
                            <span className="faq_question">What do you mean by React</span>
                            <Chevron className="faq_chevron arrow"/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <span className="faq_line"></span>
                    </li>
                    <li>
                        <div className="question_arrow">
                            <span className="faq_question">What do you mean by Angular</span>
                            <Chevron className="faq_chevron arrow"/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <span className="faq_line"></span>
                    </li>
                    <li>
                        <div className="question_arrow">
                            <span className="faq_question">What do you mean by Java</span>
                            <Chevron className="faq_chevron arrow"/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <span className="faq_line"></span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}