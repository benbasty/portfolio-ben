import React from "react";
import '../src/About.css';
import DownloadAndContact from "./DownloadAndContact";


const About = () => {
    return(
        <section className='container' id="aboutme">
            <div className="aboutme_header">
                <h1>About Me</h1>
                <div className="divider"></div>
            </div>
            <div className="aboutme_content">
                <div className="aboutme_content_description">
                    <h2>Hi, I'm Ben. Nice to meet you</h2>
                    <p>I'm a <span>FrontEnd Web Developer</span> passionate about
                        building beautiful front-end websites and web applications.
                        I am excited to be able to do what I love and help others in
                        solving their problems. Check out some of my works in the
                        <span> Projects</span> section.
                    </p>
                    <p>I'm quietly confident, naturally curious, and consistenly
                        working on improving my <span>skills</span> each time i'm working on a new
                        poject.</p>
                    <p>I'm open to <span>Job</span> opportunities where I can contribute,
                         learn and grow. If you have a good opportunity that
                          matches my skills and experience then don't hesitate
                           to <span>contact</span> me.
                    </p>
                    <DownloadAndContact />
                </div>
                <div className="aboutme_content_skills">
                    <h2>My Skills</h2>
                    <div className="allSkills">
                        <span className="singleSkill">HTML</span>
                        <span className="singleSkill">CSS</span>
                        <span className="singleSkill">React</span>
                        <span className="singleSkill">SASS</span>
                        <span className="singleSkill">GIT</span>
                        <span className="singleSkill">Github</span>
                        <span className="singleSkill">Responsive Design</span>
                        <span className="singleSkill">Bootstrap</span>
                        <span className="singleSkill">Figma</span>
                        <span className="singleSkill">Java Basics</span>
                        <span className="singleSkill">SQL Basics</span>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About;