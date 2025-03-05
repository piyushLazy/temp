import React from 'react';
import leftArrow from '@/components/assets/navigate-next.svg';
import './Left&RightScroll.css';

function RightScroll({ onClick }) {
  return (
    <img 
      src={leftArrow} 
      alt="Right Scroll" 
      className="icon navigate-right" 
      onClick={onClick}
    />
  );
}

export default RightScroll;
