import React from "react";
import "../CSS/TeamCardTemplate.css";
function TeamCardTemplate({ name, mainInfo, subInfo, imageSrc }) {
  return (
    <div className="team-card2">
      <div className="team-card2-image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="team-card2-text">
        <h1 className="heading">{name}</h1>
        <p>{mainInfo}</p>
        <p>{subInfo}</p>
      </div>
      <div className="team-card2-icons">
        <button>
          <i class="fab fa-twitter"></i>
        </button>
        <button>
          <i class="fab fa-linkedin"></i>
        </button>
        <button>
          <i class="fab fa-instagram"></i>
        </button>
      </div>
    </div>
  );
}

export default TeamCardTemplate;
