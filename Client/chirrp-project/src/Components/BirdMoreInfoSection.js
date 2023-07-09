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
                Kingdom
              </li>
              <hr />
              <li>
                <span>2</span>Phylum
              </li>
              <hr />
              <li>
                <span>3</span>Class
              </li>
              <hr />
              <li>
                <span>4</span>Order
              </li>
              <hr />
              <li>
                <span>5</span>Family
              </li>
              <hr />
              <li>
                <span>6</span>Genus
              </li>
              <hr />
              <li>
                <span>7</span>Species
              </li>
            </ul>
          </div>
          <div className="bird-statistics-sec"></div>
        </div>
        <div className="bird-media-sec">
          <div className="banner-image">
            <img src="/Media/bird-1.jpeg" alt="" />
          </div>
          <div className="subimage-sec"></div>
        </div>
      </div>
    </>
  );
}

export default BirdsMoreInfoSection;
