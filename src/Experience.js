import React from "react";
import {BsPatchCheckFill} from "react-icons/bs";
import '../src/experience.css';

function Experience() {
    return(
        <section>
            
            <h5>What are my skills ?</h5>
            <h1>My Experience</h1>

            <div className="container experience__container">
                <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>React</h4>
                            <small className="text-light">Project-Based</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>Tailwing</h4>
                            <small className="text-light">Basic</small>
                        </div>
                    </article>
                </div>
                </div>
                <div className="experience__backend">
                <h3>Blackend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>Spring & Hibernate</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>NodeJS</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>PHP</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Project-Based</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4>Java</h4>
                            <small className="text-light">Basic</small>
                        </div>
                    </article>
                </div>
                </div> 
            </div>

                 
        </section>
    )
}
export default Experience;