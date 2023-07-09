import React from "react";
import "../CSS/BirdMoreInfoSection.css";
function BirdsMoreInfoSection() {
  const myna = "hello";
  return (
    <>
      <div className="birds-moreinfo-container">
        <div className="bird-info-sec">
          <div className="heading-sec">
            <h1>Malabar Trogon</h1>
            <h2>Harpactes fasciatus</h2>
            <h2>ಮಲಬಾರ್ ಟ್ರೋಗನ್ </h2>
          </div>
          <div className="scientific-info-sec">
            <ul>
              <li>
                <span>1</span>
                <span>Kingdom</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>2</span>
                <span>Phylum</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>3</span>
                <span>Class</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>4</span>
                <span>Order</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>5</span>
                <span>Family</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>6</span>
                <span>Genus</span>
                <span></span>
              </li>
              <hr />
              <li>
                <span>7</span>
                <span>Species</span>
                <span></span>
              </li>
            </ul>
          </div>
          <div className="bird-statistics-sec">
            <div className="statastics-logo-sec">
              <i className="material-icons">done</i>
              <span>10,729</span>
              <span>observatios</span>
            </div>
            <div className="statastics-logo-sec">
              <i className="material-icons">photo_camera</i>
              <span>10,729</span>
              <span>with photos</span>
            </div>
            <div className="statastics-logo-sec">
              <i className="material-icons">videocam</i>
              <span>10,729</span>
              <span>with videos</span>
            </div>
          </div>
        </div>
        <div className="bird-media-sec">
          <div className="banner-image">
            <img src="/Media/bird-6.jpeg" alt="" />
          </div>
          <div className="subimage-sec">
            <div className="image-sec">
              <img src="/Media/bird-6.jpeg" alt="" />
              <span>male</span>
            </div>
            <div className="image-sec">
              <img src="/Media/bird-6.jpeg" alt="" />
              <span>female</span>
            </div>
            <div className="image-sec">
              <img src="/Media/bird-6.jpeg" alt="" />
              <span>female</span>
            </div>
            <div className="image-sec">
              <img src="/Media/bird-6.jpeg" alt="" />
              <span>male</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BirdsMoreInfoSection;
