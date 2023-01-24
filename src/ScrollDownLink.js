import React from 'react';
import './ScrollDownLink.css';
import {BsArrowDownCircleFill} from 'react-icons/bs';

const ScrollDownLink = () => {
  return (
    <div className="scroll__down__container">
        <a href="#about"><BsArrowDownCircleFill /></a>    
    </div>
  )
}

export default ScrollDownLink