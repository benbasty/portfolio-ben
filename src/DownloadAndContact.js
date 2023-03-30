import {React , useEffect } from 'react';
import CV from '../src/assets/cv.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';
const DownloadAndContact = () => {
    useEffect(() => {
        Aos.init(
          {duration: 2000}
        );
    }, []);
    return(
        <div className="downloadAndContact">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Chat</a>
        </div>
    )
}
export default DownloadAndContact;