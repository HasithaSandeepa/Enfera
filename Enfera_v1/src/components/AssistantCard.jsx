import React from "react";
import "../styles/AssistantCard.css";

const AssistantCard = () => {
  return (
    <div className="assistant-card">
      {/* Left Side - Text Content */}
      <div className="assistant-content">
        <h2 className="assistant-title">Need Assistant???</h2>
        <p className="assistant-description">
          Let’s assess your needs and craft the perfect strategy for your
          business.
        </p>
        <button className="assistant-button">
          Contact Us <span className="arrow">▶</span>
        </button>
      </div>
      <div className="assistant-image-container">
        <img
          src="src/assets/images/Assistant.png"
          alt="Project Image"
          className="project-card-image"
        />
      </div>
    </div>
  );
};

export default AssistantCard;
