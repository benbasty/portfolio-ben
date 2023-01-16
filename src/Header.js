import React from "react";
import DownloadAndContact from "./DownloadAndContact";
import ME from "../src/assets/me.JPG";
import HeaderSocialIcons from "./HeaderSocialIcons";
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
                    <img src={ME} alt=""/>
                </div>
                
                <a href="#about" className="scroll__down">About Me</a>
                
                <HeaderSocialIcons />
            </div>
            
        </header>
    )
}
export default Header;