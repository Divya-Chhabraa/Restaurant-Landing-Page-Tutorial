import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Stay Connected, Anytime, Anywhere
        </h1>
        <p className="primary-text">
        Whether you're working from home, chatting with friends, or hosting a webinar, CamConnect keeps you connected from anywhere in the world.        </p>
      </div>
    </div>
  );
};

export default About;
