import React, { useEffect } from "react";
import { useRef, useState } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import {AiFillHome, AiOutlineUser} from 'react-icons/ai';
import {BsChat, BsImages, BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
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
        setClick(!click);
    };
    useEffect(() => {
        document.body.className = theme
    })
    const [click, setClick] = useState(false);

    return(
        <div className="navbar">
            <div className="logo">
                <div className="benavatar">
                    <img src={ME} alt=""/>
                </div>
                <div className="benlogo">
                    <a href="#benbasty"><h4>BENBASTY</h4></a>
                </div>
            </div>
            <nav ref={navRef}>
                <Link activeClass="active" spy to="home"><AiFillHome className="icon"/> <span className="textlink">Home</span></Link>
                <Link activeClass="active" spy to="aboutme"><AiOutlineUser className="icon"/> <span className="textlink">About</span></Link>
                <Link activeClass="active" spy to="projects"><BsImages className="icon"/> <span className="textlink">Projects</span></Link>
                <Link activeClass="active" spy to="contact"><BsChat className="icon"/> <span className="textlink">Contact</span></Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="theme-button" onClick={lightDarkMode}>
                {click ?
                (<BsFillSunFill />)
                :
                (<BsFillMoonFill/>)
                }
			</button>
            <button className="nav-btn" onClick={showNavbar} >
				<FaBars />
			</button>
        </div>
    )
}








export default Nav;