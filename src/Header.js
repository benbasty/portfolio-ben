import React from "react";
import DownloadAndContact from "./DownloadAndContact";
import ME from "../src/assets/avatar.png";
import HeaderSocialIcons from "./HeaderSocialIcons";
import About from './About';
import ScrollDownLink from "./ScrollDownLink";
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
                {/* <div className="scroll__down__container">
                    <a href="#about" className="scroll__down">About Me</a>
                </div>
                
                <HeaderSocialIcons /> */}
                <div className="biography">
                    <HeaderSocialIcons />
                    <About />
                    <ScrollDownLink />
                </div>
                
                
            </div>
            {/* <div className="social-media-container">
                <h1>HI</h1>
            </div> */}
            
            
            
        </header>
    )
}
export default Header;