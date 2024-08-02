import React from 'react';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";
import Reviews from './Reviews';

function Homepage() {
  return (
    <div className="App">
      <Home />
      <section id="work"><About /></section>
      <Work />
      <section id="reviews"><Reviews /></section>
      <section id="footer"><Footer /></section>
      
      
      
    </div>
  );
}

export default Homepage;
