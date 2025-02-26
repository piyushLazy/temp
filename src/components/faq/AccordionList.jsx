"use client"; 
import React, { useState } from "react";

import "./AccordionList.css"; 
import AccordionItem from "./AccordionItem"; 

const AccordionList = () => {
  const [accordionData, setAccordionData] = useState([
    {
      number: "01",
      question: "Is this package customizable based on my preferences?",
      answer: "Yes, absolutely! We offer flexibility to personalize your trip...",
      isOpen: true,
    },
    {
      number: "02",
      question: "What should I pack for the trip to Kashmir?",
      answer: "Pack according to the season with warm clothes and essential medications.",
      isOpen: false,
    },
    {
      number: "03",
      question: "What's the best time to visit Kashmir?",
      answer: "The best time to visit Kashmir is between March to October...",
      isOpen: false,
    },
    {
      number: "04",
      question: "Is the trip safe for families?",
      answer: "Yes, our trips are designed with family safety in mind...",
      isOpen: false,
    },
  ]);

  const handleToggle = (index) => {
    setAccordionData((prevData) =>
      prevData.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  return (
    <div className="accordion-list">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          number={item.number}
          question={item.question}
          answer={item.answer}
          isOpen={item.isOpen}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionList;
