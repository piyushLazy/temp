"use client"; // ✅ Ensures client-side interactivity

import React from "react";
import Image from 'next/image';
import "./Accordionitem.css"; // ✅ Make sure the CSS file exists
import xmark from '../assets/xmark.png';
import plus from '../assets/plus.png'
const AccordionItem = ({ 
  number = "01", 
  question = "Default Question", 
  answer = "Default Answer", 
  isOpen = false, 
  onToggle 
}) => {
  return (
    <div className="accordion-item">
      <div 
        className={`accordion-header ${isOpen ? "open" : ""}`} 
        onClick={onToggle}
      >
        <div className="accordion-number">{number}</div>
        <div className="accordion-question">{question}</div>
        <Image
          src={isOpen 
            ? xmark  // ✅ Store images in `/public/images/`
            : plus} 
          alt={isOpen ? "Close" : "Open"} 
          className="accordion-icon"
        />
      </div>
      {isOpen && answer && (
        <div className="accordion-answer">{answer}</div>
      )}
      <div className="accordion-divider" />
    </div>
  );
};

export default AccordionItem;
