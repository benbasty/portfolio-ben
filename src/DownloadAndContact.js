import React from "react";
import CV from '../src/assets/cv.pdf';
const DownloadAndContact = () => {
    return(
        <div className="downloadAndContact">
            <a href={CV} download className="btn">Download my CV</a>
            <a href="#contact" className="btn btn-primary">Let's Chat</a>
        </div>
    )
}
export default DownloadAndContact;