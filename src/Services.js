import React from "react";
import { BiCheck } from "react-icons/bi";
import '../src/services.css';


function Services() {
    return(
        <section id="services">
            <h5>What do I bring to the table? </h5>
            <h1>Services</h1>
            <div className=" container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>

                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Landing pages</p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Web development support and maintenance & Web optimization</p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Web programming
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Search Engine Optimisation</p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Domain Name, Web Hosting & Professional domain name email address</p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Content Creation & Social Media Management
                            </p>
                        </li>

                    </div>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Content Design</h3>
                    </div>
                    <div className="service__list">
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list__icon" />
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                            </p>
                        </li>

                    </div>
                </article>

            </div>

        </section>
    )
}

export default Services;