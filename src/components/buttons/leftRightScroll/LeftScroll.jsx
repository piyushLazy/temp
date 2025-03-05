import React from 'react';
import leftArrow from '@/components/assets/navigate-next.svg';
import './Left&RightScroll.css';

function LeftScroll({ onClick }) {
  return (
    <img 
      src={leftArrow} 
      alt="Left Scroll" 
      className="icon navigate-left" 
      onClick={onClick}
    />
  );
}

export default LeftScroll;
