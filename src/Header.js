import {React , useEffect } from 'react';
import '../src/header.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init(
          {duration: 500}
        );
    }, []);

    return(
        <header id="home">
            <div className="header__container">
                <div className='header_intro_container'>
                    <h1 data-aos="fade-down">Hi, I'm Ben Basty</h1>
                    <p className="text-header" data-aos="fade-down">A FrontEnd Web Developer passionate about building beautiful front-end websites and web applications.</p>
                    <div id="projectsContactButton">
                        <a href="#projects" className="btn-black" data-aos="fade-left">Projects</a>
                    </div>
                </div>
                <div className='header-home-socials'>
                    <div className='header-home-social'>
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM" className='header-home-social-link' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    </div>
                    <div className='header-home-social'>
                        <a href="https://github.com/benbasty" className='header-home-social-link' target="_blank" rel="noreferrer"><BsGithub /></a>
                    </div>
                    <div className='header-home-social'>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw" className='header-home-social-link' target="_blank" rel="noreferrer"><BsYoutube /></a>
                    </div>
                </div>
                {/* <div className="me" data-aos="zoom-in">
                    <div className="image">
                        <img src={ME} alt=""/>
                    </div>
                </div> */}
                {/* <div className="biography">

                    <div className="header__social__icons" data-aos="fade-right">
                        <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/benbasty" target="_blank" rel="noreferrer"><BsGithub /></a>
                        <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw" target="_blank" rel="noreferrer"><BsYoutube /></a>
                    </div>

                    <div id="about">
                        <div className="about__card" data-aos="flip-left">
                            <article>
                                <FiUsers className="about__icon"/>
                                <h5>Biography</h5>
                                <small>I'm Ben and I'm passionate about developping beautiful front-end interfaces.</small>
                            </article>
                        </div>
                        <div className="about__card" data-aos="flip-up">
                            <article>
                                <FaAward className="about__icon"/>
                                <h5>Experience</h5>
                                <small>1 Year</small>
                            </article>
                        </div>
                        <div className="about__card" data-aos="flip-right">
                            <article>
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>5+ Projects</small>
                            </article>
                        </div>
                    </div>

                    <div className="scroll__down__container" data-aos="fade-left">
                        <a href="#skills"><BsArrowDownCircleFill /></a>
                    </div>
                </div> */}
            </div>
        </header>
    )
}
export default Header;