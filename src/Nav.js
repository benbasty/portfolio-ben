import React from "react";
// import { useState } from "react";
import { useRef } from "react";
import {FaTimes, FaBars} from 'react-icons/fa';
import {AiFillHome, AiFillTrophy} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {BsChat,BsPencilSquare, BsImages, BsBriefcase, BsFillMoonFill } from 'react-icons/bs';
import '../src/nav.css';

// const Nav = () => {
//     const [activeNav, setActiveNav] = useState("#");
//     const navRef = useRef();
//     const showNavBar = () => {
//         navRef.current.classList.toggle('show-menu');
//     }

//     return(
//         // nav for initial code
//         // <nav>
//         //     <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav==='#home'?'active':''}><AiFillHome/></a>
//         //     <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav==='#about'?'active':''}><SiAboutdotme/></a>
//         //     <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav==='#projects'?'active':''}><AiOutlineFundProjectionScreen/></a>
//         //     <a href="#services" onClick={() => setActiveNav("#home")} className={activeNav==='#services'?'active':''}><MdOutlineDesignServices/></a>
//         //     <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav==='#contact'?'active':''}><AiFillContacts/></a>
//         // </nav>
//         <nav class="nav container" ref={navRef}>
//             <a href="#logo" className="nav__logo">
//                 BEN
//             </a>
//             <div className="nav__menu" id="nav-menu" >
//                 <ul className="nav__list">
//                     <li className="nav__item">
//                         <a href="#home" className="nav__link">
//                             <AiFillHome className="icon"/> Home
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#skills" className="nav__link">
//                             <AiFillTrophy className="icon"/> Skills
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#qualifications" className="nav__link">
//                             <BiBookOpen className="icon"/> Qualifications
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#services" className="nav__link">
//                             <BsBriefcase className="icon"/> Services
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#projects" className="nav__link">
//                             <BsImages className="icon"/> Projects
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#contacts" className="nav__link">
//                             <BsChat className="icon"/> Contact
//                         </a>
//                     </li>
//                 </ul>
//                 <div className="button_nav nav__close" id="nav-close">
//                     <AiOutlineClose className="icon" onClick={showNavBar}/>
//                 </div>
//             </div>
//             <div className="nav__buttons">
//                 {/* theme change button */}
//                 {/* <BsFillMoonFill className="theme__button"/> */}
                
//                 {/* toggle button */}
//                 <div className="button_nav nav__toggle" id="nav-toggle">
//                     <RiMenu4Line className="icon" onClick={showNavBar}/>
//                 </div>
                
//             </div>
//         </nav>

//     )    
// }
const Nav = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return(
        <div className="navbar">
            <h3>BEN</h3>
            <nav ref={navRef}>
                <a href="#home"><AiFillHome className="icon"/> Home</a>
                <a href="#skills"><AiFillTrophy className="icon"/> Skills</a>
                <a href="#qualifications"><BiBookOpen className="icon"/> Qualifications</a>
                <a href="#services"><BsBriefcase className="icon"/> Services</a>
                <a href="#projects"><BsImages className="icon"/> Projects</a>
                <a href="#blog"><BsPencilSquare className="icon"/> Blog</a>
                <a href="#contact"><BsChat className="icon"/> Contact</a>
                
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            {/* <button className="theme-button">
                <BsFillMoonFill />
			</button> */}
            <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
        </div>
        
    )
}








export default Nav;