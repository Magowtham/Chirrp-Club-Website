import React, { useEffect, useState } from "react";
import TemplateInfo from "./TemplateInfo";
import "../CSS/BirdsCollection.css";
function BirdsColection() {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    const inputField = document.querySelector(".search-sec input");
    const clrBtnIcon = document.querySelector(".textclr-btn i");
    const clrBtn = document.querySelector(".textclr-btn");
    const showBtn = () => {
      if (inputField.value.length > 0) {
        clrBtnIcon.style.opacity = 1;
      } else {
        clrBtnIcon.style.opacity = 0;
      }
    };
    const clearBtn = () => {
      inputField.value = "";
      inputField.focus();
      clrBtnIcon.style.opacity = 0;
    };

    inputField.addEventListener("input", showBtn);
    clrBtn.addEventListener("click", clearBtn);
    return () => {
      inputField.removeEventListener("input", showBtn);
      clrBtn.removeEventListener("click", clearBtn);
    };
  }, []);
  console.log(isActive);
  return (
    <>
      <TemplateInfo
        bannerHeading="About"
        bannerSubHeading="Chirrp Club"
        bannerParagraph="  A centre dedicated to open-source software and hardware at the
              National Institute of Technology Karnataka, Surathkal, Mangalore,
              India."
        bannerImage="https://wallpaperset.com/w/full/8/3/6/93556.jpg"
      />
      <div className="birdscollection-container">
        <div className="search-sec">
          <button className="search-btn">
            <i className="material-icons">search</i>
          </button>
          <input type="text" placeholder="Search Birds..." />
          <button className="textclr-btn">
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="bird-list-sec">
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-1.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-2.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-3.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-4.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-5.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-6.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-7.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
          <div className="bird-card">
            <div className="bird-image-sec">
              <img src="/Media/bird-8.jpeg" alt="" />
            </div>
            <div className="bird-info-sec">
              <h2>Malabar Whistling Thrush</h2>
              <h2>myophonous horsfieldii</h2>
              <h2>kannada name</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BirdsColection;
