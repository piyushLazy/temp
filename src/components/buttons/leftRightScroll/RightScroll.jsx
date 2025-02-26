import React from 'react';
import leftArrow from '../../assets/navigate-next.svg';
import Image from "next/image"; 
import './Left&RightScroll.css';

function RightScroll({ onClick }) {
  return (
    <Image
      src={leftArrow} 
      alt="Right Scroll" 
      className="icon navigate-right" 
      onClick={onClick}
    />
  );
}

export default RightScroll;
