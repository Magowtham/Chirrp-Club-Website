import React, { useEffect } from "react";
import TeamCardTemplate from "./TeamCardTemplate";
import "../CSS/TeamSlider.css";
function TeamSlider() {
  useEffect(() => {
    const box = document.querySelector(".team-slider-card-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const next = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
    };
    const prev = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    };
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
  }, []);

  return (
    <div className="team-slider-container">
      <div className="team-slider-card-container">
        <TeamCardTemplate
          name="Vivek Alva"
          mainInfo="Managing trusttee"
          subInfo="AIET"
          imageSrc="/Media/bird-1.jpeg"
        />
        <TeamCardTemplate
          name="Vivek Alva"
          mainInfo="Managing trusttee"
          subInfo="AIET"
          imageSrc="/Media/vivek-sir.jpeg"
        />
        <TeamCardTemplate
          name="Vivek Alva"
          mainInfo="Managing trusttee"
          subInfo="AIET"
          imageSrc="/Media/vivek-sir.jpeg"
        />
        <TeamCardTemplate
          name="Vivek Alva"
          mainInfo="Managing trusttee"
          subInfo="AIET"
          imageSrc="/Media/vivek-sir.jpeg"
        />
        <TeamCardTemplate
          name="Vivek Alva"
          mainInfo="Managing trusttee"
          subInfo="AIET"
          imageSrc="/Media/vivek-sir.jpeg"
        />
      </div>
      <div className="btn-sec">
        <button className="next-btn">
          <i className="material-icons">arrow_forward_ios</i>
        </button>
        <button className="prev-btn">
          <i className="material-icons">arrow_back_ios_new</i>
        </button>
      </div>
    </div>
  );
}

export default TeamSlider;
