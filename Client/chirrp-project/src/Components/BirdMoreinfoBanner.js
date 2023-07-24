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
            <h2>ಮಲಬಾರ್ ಟ್ರೋಗನ್</h2>
          </div>
          <div className="biological-order-sec">
            <ul>
              <li>
                <span>1</span>
                <hr />
              </li>
              <li>KINGDOM</li>
              <li>Animalia</li>
            </ul>
            <ul>
              <li>
                <span>2</span>
                <hr />
              </li>
              <li>PHYLUM</li>
              <li>Chordata</li>
            </ul>
            <ul>
              <li>
                <span>3</span>
                <hr />
              </li>
              <li>CLASS</li>
              <li>Aves</li>
            </ul>
            <ul>
              <li>
                <span>4</span>
                <hr />
              </li>
              <li>ORDER</li>
              <li>Bucerotiformes</li>
            </ul>
            <ul>
              <li>
                <span>5</span>
                <hr />
              </li>
              <li>FAMILY</li>
              <li>Bucerotidae</li>
            </ul>
            <ul>
              <li>
                <span>6</span>
                <hr />
              </li>
              <li>GENUS</li>
              <li>Ocyceros</li>
            </ul>
            <ul>
              <li>
                <span>7</span>
              </li>
              <li>SPECIES</li>
              <li>Ocyceros griseus</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="test">
        <ul>
          <li>
            <span>1</span>
            <hr />
          </li>
          <li>KINGDOM</li>
          <li>Animalia hello world hello world hello world</li>
        </ul>
      </div>
    </>
  );
}

export default BirdMoreinfoBanner;
