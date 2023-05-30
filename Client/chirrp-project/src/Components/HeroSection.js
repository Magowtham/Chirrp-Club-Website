import React, { useState } from "react";
import "../CSS/HeroSection.css";
import Navbar from "./Navbar";
import Button from "./Button";

function HeroSection({ setOverlay }) {
  return (
    <div className="hero-container">
      <Navbar className="navbar-module" setOverlay={setOverlay} />
      <div className="hero-text-section">
        <h3 className="hero-headings heading1">
          Alva's Institue of Engineering and Technology
        </h3>
        <h1 className="hero-headings heading2">
          Wellcome to the world of birds with
        </h1>
        <div className="hero-logo-section">
          <img src="/Media/Chirrp-logo.png" alt="" />
        </div>
        <h3 className="hero-headings heading3">
          Connect with nature by exploring birds...
        </h3>
        <Button title="Get started" videoBtn={false} routTo="about" />
      </div>
    </div>
  );
}

export default HeroSection;
