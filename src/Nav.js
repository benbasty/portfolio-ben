import React, { useEffect } from "react";
import { useRef, useState } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import {AiFillHome, AiFillTrophy, AiOutlineUser} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {BsChat, BsImages, BsBriefcase, BsFillMoonFill } from 'react-icons/bs';
import '../src/nav.css';
import {Link} from 'react-scroll';
import ME from "../src/assets/avatar.png";


const Nav = () => {
    const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    const [theme, setTheme] = useState("light-theme");
    const lightDarkMode = () => {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    };
    useEffect(() => {
        document.body.className = theme
    })

    return(
        <div className="navbar">
            <div className="logo">
                <div className="benavatar">
                    <img src={ME} alt=""/>
                </div>
                <div className="benlogo">
                    <h4>BENBASTY</h4>
                </div>
            </div>
            <nav ref={navRef}>
                <Link activeClass="active" smooth spy to="home"><AiFillHome className="icon"/> <span className="textlink">Home</span></Link>
                {/* <Link activeClass="active" smooth spy to="skills"><AiFillTrophy className="icon"/> Skills</Link>
                <Link activeClass="active" smooth spy to="qualifications"><BiBookOpen className="icon"/> Qualifications</Link> */}
                <Link activeClass="active" smooth spy to="aboutme"><AiOutlineUser className="icon"/> <span className="textlink">About</span></Link>
                {/* <Link activeClass="active" smooth spy to="services"><BsBriefcase className="icon"/> Services</Link> */}
                <Link activeClass="active" smooth spy to="projects"><BsImages className="icon"/> <span className="textlink">Projects</span></Link>
                <Link activeClass="active" smooth spy to="contact"><BsChat className="icon"/> <span className="textlink">Contact</span></Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="theme-button" onClick={lightDarkMode}>
                <BsFillMoonFill/>   
			</button>
            <button className="nav-btn" onClick={showNavbar} >
				<FaBars />
			</button>
        </div>
    )
}








export default Nav;