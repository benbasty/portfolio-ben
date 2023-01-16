import React from "react";
// import ME from '../src/assets/me_4.JPG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import '../src/about.css';


const About = () => {
    return(
        <section id="about">
            {/* <h5>Biography</h5>
            <h1>About Me</h1> */}
            <div className="about__container container">

                {/* <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me"/>
                    </div>
                </div>  */}


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Biography</h5>
                            <small>I'm Ben and I'm passionate about developping beautiful front-end interfaces.</small>

                        </article>
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1 Year</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>5+ Projects</small>
                        </article>
                    </div>
                    {/* <p>Vitae suscipit tellus mauris a diam 
                        maecenas sed enim. Laoreet id donec 
                        ultrices tincidunt arcu non sodales. 
                        Mauris commodo quis imperdiet massa 
                        tincidunt nunc pulvinar sapien et. 
                        Non pulvinar neque laoreet suspendisse 
                        interdum consectetur.
                    </p> */}
                    {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
                </div>
            </div>
        </section>
    )
}
export default About;