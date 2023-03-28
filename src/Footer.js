import React from "react";
import './footer.css';
// import {FaFacebook} from 'react-icons/fa';
// import {FiInstagram} from 'react-icons/fi';
// import {IoLogoTwitter} from 'react-icons/io';

import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function Footer() {
    const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const year = `${current.getFullYear()}`;
    return(
        <footer id="footer">
            {/* <a href="#home" className="footer__logo">BEN</a> */}
            {/* <ul className="permalinks"> 
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> */}
            <div className="footer_main">
                <div className="footer__me">
                    <h4>BEN BASTY</h4>
                    <p>A FrontEnd Web Developer passionate about building beautiful <br/> front-end websites and web applications.</p>
                </div>
                <div className="footer__socials">
                    <h4>SOCIAL</h4>
                    <div className="footer__social">
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/benbasty" target="_blank" rel="noreferrer"><BsGithub /></a>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw" target="_blank" rel="noreferrer"><BsYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <small>&copy; Copyright 2022 - {year}. Made by <a href="#benbasty">Ben Basty</a></small>
            </div>
        </footer>
    )
}
export default Footer;