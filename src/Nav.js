import React from "react";
import { useRef } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import {AiFillHome, AiFillTrophy} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {BsChat,BsPencilSquare, BsImages, BsBriefcase, BsFillMoonFill } from 'react-icons/bs';
import '../src/nav.css';
import {Link} from 'react-scroll';


const Nav = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return(
        <div className="navbar">
            <h3>BEN</h3>
            <nav ref={navRef}>
                <Link activeClass="active" smooth spy to="home"><AiFillHome className="icon"/> Home</Link>
                <Link activeClass="active" smooth spy to="skills"><AiFillTrophy className="icon"/> Skills</Link>
                <Link activeClass="active" smooth spy to="qualifications"><BiBookOpen className="icon"/> Qualifications</Link>
                <Link activeClass="active" smooth spy to="services"><BsBriefcase className="icon"/> Services</Link>
                <Link activeClass="active" smooth spy to="projects"><BsImages className="icon"/> Projects</Link>
                <Link activeClass="active" smooth spy to="blog"><BsPencilSquare className="icon"/> Blog</Link>
                <Link activeClass="active" smooth spy to="contact"><BsChat className="icon"/> Contact</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            {/* <a href="#home"><AiFillHome className="icon"/> Home</a>
                <a href="#skills"><AiFillTrophy className="icon"/> Skills</a>
                <a href="#qualifications"><BiBookOpen className="icon"/> Qualifications</a>
                <a href="#services"><BsBriefcase className="icon"/> Services</a>
                <a href="#projects"><BsImages className="icon"/> Projects</a>
                <a href="#blog"><BsPencilSquare className="icon"/> Blog</a>
                <a href="#contact"><BsChat className="icon"/> Contact</a> */}
            <button className="theme-button">
                <BsFillMoonFill />
			</button>
            <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
        </div>
        
    )
}








export default Nav;