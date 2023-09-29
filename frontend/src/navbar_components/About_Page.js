import React from "react"
import './About_Page.css'
import {ReactComponent as Instagram} from "../images/images_svg/Instagram.svg";
import {ReactComponent as Github} from "../images/images_svg/Github.svg";
import {ReactComponent as LinkedIn} from "../images/images_svg/LinkedIn.svg";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export default function About_Page(){
    const Home_style={
        textDecoration: 'none',
        justifyContent: "center",
        alignItems: "center",
    }
    return(
        <motion.div className="About">
        <section className="about_section">
            <div className="about_container">
                <div className="col-md-12 text-center">
                    <h2 className="section_title">
                        Meet the Team
                    </h2>
                    <br/>
                </div>
                <div className="about_row">
                    <div className="col-sm-6 col-md-4">
                        <div className="team_item">
                            <img src={require('../images/images_jpg/Andrej_Photo.jpg')} className="team_image" alt="pic"/>
                            <h3>ANDREJ RISTOVSKI</h3>
                            <div className="team_info">
                                <p>Web Developer</p>
                                <p>Andrej is our founder and has developed search strategies for a variety of clients from international brands to medium sized businesses.
                                    <span>
                                        <a href="https://AndrejRistovski.github.io" className="more_info"> More</a>
                                    </span>
                                </p>
                                <ul className="team_icon">
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
                                    <li>
                                        <a href="https://www.linkedin.com/in/andrej-ristovski-0a5228289/" className="about_linkedin">
                                            <LinkedIn className="fa fa-linkedin"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team_item">
                            <img src={require('../images/images_jpg/Blagoj_Photo.jpg')} className="team_image" alt="pic"/>
                            <h3>BLAGOJ IVANOV</h3>
                            <div className="team_info">
                                <p>Software Engineer</p>
                                <p>Certified back-end engineer with 4+ years of experience who is comfortable working with Java & Python all to deliver exceptional results.
                                    <span>
                                        <a href="https://biv2101.github.io" className="more_info"> More</a>
                                    </span>
                                </p>
                                <ul className="team_icon">
                                    <li>
                                        <a href="https://www.instagram.com/ivanov_blagoj/" className="about_instagram">
                                            <Instagram className="fa fa-instagram"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/biv2101" className="about_github">
                                            <Github className="fa fa-github"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/blagoj-ivanov-27b778254/" className="about_linkedin">
                                            <LinkedIn className="fa fa-linkedin"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link style={Home_style} to="/" id="back_button">Home</Link>
                </div>
            </div>
        </section>
        </motion.div>
    )
}