import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleClickView = () => {
    navigate('/signup');
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Connect Seamlessly with CamConnect
          </h1>
          <p className="primary-text">
          Experience the future of video conferencing with crystal-clear
          quality and effortless connections.
          </p>
          <button onClick={handleClickView} className="secondary-button">
          Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
