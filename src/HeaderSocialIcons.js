import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocialIcons = () => {
    return (
        <div className="header__social__icons"> 
            <a href="https://www.linkedin.cn/incareer/in/ACoAABjKnVcBVmhZCkKpwHBoRfx-ntwgnouN1eM"><BsLinkedin /></a>
            <a href="https://github.com/benbasty"><BsGithub /></a>
            <a href="https://www.youtube.com/channel/UCnii87T9WU4TxSW-IZnMKmw"><BsYoutube /></a>
        </div>
    )
}
export default HeaderSocialIcons;