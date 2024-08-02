import React from "react";
import Logo from "../Assets/cc-logo.svg";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-wrapper" style={{ marginBottom: "0px", paddingBottom: "0px"}}>
      <div className="footer-section-one">
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
        <p>©CamConnect</p>
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
        Home
      </Link>
      <a href="#work" style={{ color: "#ffffff", textDecoration: "none" }}>
        About
      </a>
      <Link to="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>
        Contact
      </Link>
      <a href="#reviews" style={{ color: "#ffffff", textDecoration: "none" }}>
        Reviews
      </a>
      <Link to="/login" style={{ color: "#ffffff", textDecoration: "none" }}>
        Login
      </Link>
      <Link to="/signup" style={{ color: "#ffffff", textDecoration: "none" }}>
        Signup
      </Link>
      <Link to="/feedback" style={{ color: "#ffffff", textDecoration: "none" }}>
        Feedback
      </Link>
        </div>
        <div className="footer-section-columns">
          <span style={{ color: "#ffffff", textDecoration: "none", textAlign:"left"}}>+91 9876543212</span>
          <a href="mailto:divyachhabra790@gmail.com" style={{ color: "#ffffff", textDecoration: "none", textAlign:"left"}}>camconnect@gmail.com</a>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
