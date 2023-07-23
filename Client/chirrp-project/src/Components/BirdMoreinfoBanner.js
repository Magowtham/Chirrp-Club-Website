import React from "react";
import "../CSS/BirdMoreinfoBanner.css";

function BirdMoreinfoBanner() {
  return (
    <>
      <div className="bird-banner-container">
        <div className="image-sec">
          <img src="/Media/bird-3.jpeg" alt="" />
        </div>
        <div className="info-sec">
          <div className="heading-sec">
            <h1>White Bellied Sea Eagle</h1>
            <h2>Harpactes fasciatusfir</h2>
            <h2>ಮಲಬಾರ್ ಟ್ರೋಗನ್ </h2>
          </div>
          <div className="biological-order-sec">
            <ul>
              <li>1</li>
              <div className="pipe"></div>
              <li>2</li>
              <div className="pipe"></div>
              <li>3</li>
              <div className="pipe"></div>
              <li>4</li>
              <div className="pipe"></div>
              <li>5</li>
              <div className="pipe"></div>
              <li>6</li>
              <div className="pipe"></div>
              <li>7</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BirdMoreinfoBanner;
