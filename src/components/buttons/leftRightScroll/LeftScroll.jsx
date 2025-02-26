import React from 'react';
// import leftArrow from '../../assets/navigate-next.svg';
import  leftArrow from '../../assets/navigate-next.png';
import Image from "next/image"; 
import './Left&RightScroll.css';

function LeftScroll({ onClick }) {
  return (
    <Image 
      src={leftArrow} 
      alt="Left Scroll" 
      className="icon navigate-left" 
      onClick={onClick}
    />
  );
}

export default LeftScroll;
