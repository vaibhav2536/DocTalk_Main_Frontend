/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./Chatbot.css"; // Import CSS file for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  return (
  <div className="chatbot-container">
    {isOpen && (
    <div className="chatbot">
      <iframe
      src="https://pharmacy-ml-1.onrender.com" // Adjust URL if needed
      title="Chatbot"
      width="500"
      height="350"
      frameBorder="0"
      ></iframe>
      </div>
    )}
    <button className={`chatbot-toggle-btn ${isOpen ? "open" : ""}`} onClick={toggleChatbot}>
      Have Your Alternate Medicine
      </button>
      </div>
      );
    };

export default Chatbot;
