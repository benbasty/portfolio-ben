import React from "react";
// import ME from '../src/assets/me_4.JPG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
    return(
        <div id="about">
            {/* <h5>Biography</h5>
            <h1>About Me</h1> */}
            <div className="container about__container">
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
        </div>
    )
}
export default About;