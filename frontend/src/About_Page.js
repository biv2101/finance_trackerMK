import React from "react"
import './About_Page.css'
import {ReactComponent as Facebook} from "./Facebook.svg";
import {ReactComponent as Instagram} from "./Instagram.svg";
import {ReactComponent as Twitter} from "./X.svg";
import {ReactComponent as Github} from "./Github.svg";
import {Link} from "react-router-dom";
export default function About_Page(){
    const Home_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
    }
    let message_1 = 'Finance-Tracker.mk was founded in 2023. We care about quality, craftsmanship, and disciplined environment.\n';
    let message_2 = 'We are active contributors to crypto & stocks exchange.';
    return(
        <div className="About">
        <section className="about_section">
            <div className="about_container">
                <div className="col-md-12 text-center">
                    <h2 className="section_title">
                        Meet the Team
                    </h2>
                    <br/>
                    <p className="section_subtitle_1">{message_1}</p>
                    <p className="section_subtitle_2">{message_2}</p>
                </div>
                <div className="about_row">
                    <div className="col-sm-6 col-md-4">
                        <div className="team_item">
                            <img src={require('./Web_Picture.jpg')} className="team_image" alt="pic"/>
                            <h3>ANDREJ RISTOVSKI</h3>
                            <div className="team_info">
                                <p>Web Developer</p>
                                <p>Andrej is our founder and has developed search strategies for a variety of clients from international brands to medium sized businesses.
                                    <span>
                                        <a href="https://twitter.com/AndrejGFalls" className="more_info"> More</a>
                                    </span>
                                </p>
                                <ul className="team_icon">
                                    <li>
                                        <a href="https://twitter.com/AndrejGFalls" className="about_twitter">
                                            <Twitter className="fa fa-twitter"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/andrej.ristovski.585" className="about_facebook">
                                            <Facebook className="fa fa-facebook"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/andrej.ristovski.585/" className="about_instagram">
                                            <Instagram className="fa fa-instagram"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/AndrejRistovski" className="about_github">
                                            <Github className="fa fa-github"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team_item">
                            <img src={require('./Web_Picture.jpg')} className="team_image" alt="pic"/>
                            <h3>BLAGOJ IVANOV</h3>
                            <div className="team_info">
                                <p>Software Engineer</p>
                                <p>Blagoj is our founder and has developed search strategies for a variety of clients from international brands to medium sized businesses.
                                    <span>
                                        <a href="https://twitter.com/AndrejGFalls" className="more_info"> More</a>
                                    </span>
                                </p>
                                <ul className="team_icon">
                                    <li>
                                        <a href="#" className="about_twitter">
                                            <Twitter className="fa fa-twitter"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="about_facebook">
                                            <Facebook className="fa fa-facebook"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/ivanov_blagoj/" className="about_instagram">
                                            <Instagram className="fa fa-instagram"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="about_github">
                                            <Github className="fa fa-github"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link style={Home_style} to="/" id="back_button">Back</Link>
                </div>
            </div>
        </section>
        </div>
    )
}