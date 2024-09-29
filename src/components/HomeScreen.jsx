import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./HomeScreen.css";

const HomeScreen = () => {
  const events = [
    { title: "Start", route: "/start" },
    { title: "1526-1857", route: "/event1" },
    { title: "1674-1818", route: "/event2" },
    { title: "1757-1858", route: "/event3" },
    { title: "1857", route: "/event4" },
    { title: "1885-1919", route: "/event5" },
    { title: "1920-1922", route: "/event6" },
    { title: "End", route: "/end" },
    { title: "", route: "/" } // Fallback route for the empty title
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const timelineRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate

  const handleScroll = () => {
    const timeline = timelineRef.current;
    const bubbleElements = timeline.querySelectorAll('.bubble');

    let closestIndex = 0;
    let closestDistance = Infinity;

    bubbleElements.forEach((bubble, index) => {
      const bubbleRect = bubble.getBoundingClientRect();
      const bubbleCenter = bubbleRect.top + bubbleRect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = Math.abs(bubbleCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setSelectedIndex(closestIndex);
  };

  const handleRingClick = () => {
    navigate(events[selectedIndex].route); // Redirect to the route based on selectedIndex
  };

  useEffect(() => {
    const timeline = timelineRef.current;
    timeline.addEventListener("scroll", handleScroll);

    return () => {
      timeline.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-screen">
      <h1 className="title"></h1>
      <h1 className="title"></h1>
      <div className="ring-container">
        {/* Ring that acts like a button */}
        <button
          className={`ring ${selectedIndex !== null ? "active" : ""}`}
          onClick={handleRingClick}
        >
          {events[selectedIndex].title}
        </button>
      </div>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline">
          {/* Space before the first bubble */}
          <div className="padding"></div>
          {events.map((event, index) => (
            <div key={index} className="timeline-bubble">
              <div
                className={`bubble ${selectedIndex === index ? "highlighted" : ""}`}
              >
                {event.title}
              </div>
              {index < events.length - 1 && <div className="line"></div>}
            </div>
          ))}
          {/* Space after the last bubble */}
          <div className="padding"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
