import React from "react";
import DownloadAndContact from "./DownloadAndContact";
import ME from "../src/assets/avatar.png";
// import HeaderSocialIcons from "./HeaderSocialIcons";
// import About from './About';
// import ScrollDownLink from "./ScrollDownLink";
import '../src/header.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import {BsArrowDownCircleFill} from 'react-icons/bs';

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
                <div className="biography">

                    <div className="header__social__icons"> 
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM"><BsLinkedin /></a>
                        <a href="https://github.com/benbasty"><BsGithub /></a>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw"><BsYoutube /></a>
                    </div>

                    <div id="about">
                        <div className="about__card">
                            <article>
                                <FiUsers className="about__icon"/>
                                <h5>Biography</h5>
                                <small>I'm Ben and I'm passionate about developping beautiful front-end interfaces.</small>
                            </article>
                        </div>
                        <div className="about__card">
                            <article>
                                <FaAward className="about__icon"/>
                                <h5>Experience</h5>
                                <small>1 Year</small>
                            </article>
                        </div>
                        <div className="about__card">
                            <article>
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>5+ Projects</small>
                            </article>
                        </div>    
                    </div>

                    <div className="scroll__down__container">
                        <a href="#about"><BsArrowDownCircleFill /></a>    
                    </div>
                </div>   
            </div>
        </header>
    )
}
export default Header;