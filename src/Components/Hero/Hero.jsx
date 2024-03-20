import React from "react";
import "./Hero.css";
import wave from '../Assets/wave.png'
import hero from '../Assets/hero.png'
import rightarrow from '../Assets/right-arrow.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={wave} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>latet collection</div>
          <img src={rightarrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero} alt="" />


      </div>
    </div>
  );
};

export default Hero;
