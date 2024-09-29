import React from "react";
import "./Event1.css"; // Importing the CSS file
import mughalImage from "../assets/mughal.jpeg"; // Adjusted path for the image
import sikhandmaratha from "../assets/sikhandmaratha.jpeg";
import mughalVideo from "../videos/mughal.mp4"; // Import the video
import sikhAndMarathaVideo from '../videos/sikhandmaratha.mp4';

const Event1 = () => {
  const handleVideoClick = (event) => {
    const video = event.target;

    // Check if the video is already in full-screen mode
    if (document.fullscreenElement) {
      document.exitFullscreen(); // Exit full screen if already in full-screen mode
    } else {
      video.requestFullscreen(); // Request full screen
    }
  };

  return (
    <div className="event1-container">
      <h1 className="event1-header">
        Let's have a deep dive on what all happened between 1526-1857
      </h1>

      {/* Mughal Empire Section */}
      <div id="mughal-empire" className="mughal-section">
        <h2 className="mughal-header">The Mughal Empire</h2>
        
        <div className="mughal-content">
          <img src={mughalImage} alt="Mughal Empire" className="mughal-image" />
          <div className="mughal-info">
            <p>
              The Mughal Empire was a prominent empire in Indian history, known for its rich culture, significant architectural achievements, and influential rulers. Founded in 1526 by Babur, a descendant of Timur and Genghis Khan, the empire laid the foundation for a period of remarkable achievements in art and culture. Under the reign of Akbar the Great (1556-1605), the empire expanded significantly, incorporating much of the Indian subcontinent. His policies of religious tolerance, administrative reforms, and military conquests contributed to the empire's stability and prosperity.
            </p>
            <p>
              Key achievements of the Mughal Empire include the construction of the Taj Mahal, which was commissioned by Shah Jahan in memory of his wife Mumtaz Mahal, and the establishment of a vibrant court culture that fostered arts, literature, and the Persian language. The Mughals introduced a centralized system of governance that laid the groundwork for modern administrative practices in India. However, the empire faced challenges, including internal strife, succession wars, and external invasions, particularly from the Persian and Afghan rulers. By the 18th century, the empire began to decline, leading to the rise of regional powers and the eventual emergence of British colonial dominance.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Learn More About the Mughal Empire</h2>
          <div className="video-box" onClick={handleVideoClick}>
            <div className="video-title">Click Here to Learn More</div>
            <video controls className="mughal-video">
              <source src={mughalVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h2 className="mughal-header">The Sikh and Maratha War</h2>
        <div className="mughal-content">
          <img src={sikhandmaratha} alt="Sikh and Maratha War" className="mughal-image" />
          <div className="mughal-info">
            <p>
              The Sikh and Maratha wars played a significant role in the power dynamics of India during the late 17th and early 18th centuries. The Sikh Empire, under the leadership of Guru Gobind Singh Ji, emerged as a formidable force, advocating for justice and resistance against Mughal oppression. The Marathas, a powerful warrior group from the Deccan Plateau, sought to expand their influence across the subcontinent, leading to a series of conflicts known as the Maratha Wars. These wars were characterized by guerrilla warfare and innovative military tactics, highlighting the strategic prowess of leaders like Shivaji Maharaj and later, Baji Rao I.
            </p>
            <p>
              The outcome of these wars set the stage for future interactions between different powers in India, including the British colonial expansion. The Sikh Empire's emergence as a major power posed a challenge to both the Mughal and Maratha dominions, leading to a reconfiguration of alliances and enmities. The eventual conflict between the British and the Sikhs culminated in the Anglo-Sikh Wars, which significantly altered the political landscape of Northern India. These historical conflicts not only shaped the future of India but also influenced the cultural and political landscape of the region, laying the groundwork for the complex dynamics of colonial and post-colonial India.
            </p>
          </div>
        </div>

        <div className="video-section">
          <h2>Learn More About Sikh And Maratha War</h2>
          <div className="video-box" onClick={handleVideoClick}>
            <div className="video-title">Click Here to Learn More</div>
            <video controls className="mughal-video">
              <source src={sikhAndMarathaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;
