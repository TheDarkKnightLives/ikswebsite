import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Start.css"; // Optional: add your styling here

const Start = () => {
  const fullMessage = "Welcome to the Timeline! Here, each event tells a story.";
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText((prev) => prev + fullMessage[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        // Show button after typing animation is complete
        setShowButton(true);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  const handleStartJourney = () => {
    navigate("/event1"); // Redirect to Event1
  };

  return (
    <div className="start-container">
      <h1>{displayedText}</h1>
      {showButton && (
        <button className="start-button" onClick={handleStartJourney}>
          Start the Journey
        </button>
      )}
    </div>
  );
};

export default Start;
