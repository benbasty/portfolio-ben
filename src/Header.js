import React from "react";
import DownloadAndContact from "./DownloadAndContact";
import ME from "../src/assets/mxe.png";
import HeaderSocialIcons from "./HeaderSocialIcons";
// import About from './About';
import '../src/header.css';

const Header = () => {
    return(
        <header id="home">
            <div className="container header__container">
                <h5>Hi, I'm</h5>
                <h1>Ben Basty</h1>
                <h4 className="text-primary">Front-End Developer</h4>
                <DownloadAndContact />
                <div className="me">
                    <div className="image">
                        <img src={ME} alt=""/>
                    </div>
                    
                </div>
                <a href="#about" className="scroll__down">About Me</a>
                <HeaderSocialIcons />
                
                
            </div>
            <div className="social-media-container">
                <h1>HI</h1>
            </div>
            
            
            
        </header>
    )
}
export default Header;