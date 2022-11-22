import React from "react";
import { useState } from "react";
import {AiFillHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {MdOutlineDesignServices} from 'react-icons/md';
import {AiFillContacts} from 'react-icons/ai';
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return(
        <nav>
            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav==='#home'?'active':''}><AiFillHome/></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav==='#about'?'active':''}><SiAboutdotme/></a>
            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav==='#projects'?'active':''}><AiOutlineFundProjectionScreen/></a>
            <a href="#services" onClick={() => setActiveNav("#home")} className={activeNav==='#services'?'active':''}><MdOutlineDesignServices/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav==='#contact'?'active':''}><AiFillContacts/></a>
        </nav>
    )    
}
export default Nav;