import React from "react";
import "../CSS/BirdsPhotoTemplate.css";
function BirdsPhotoTemplate({
  onClickRout,
  imageSrc,
  birdName,
  birdScientificName,
  photographerName,
  day,
  month,
  year,
  location,
}) {
  function fullScreenImage() {
    window.location.href = this.url;
  }
  return (
    <>
      <div
        className="birds-template-card"
        onClick={fullScreenImage.bind(onClickRout)}
      >
        <div className="image-sec">
          <img src={imageSrc} alt="" />
        </div>
        <div className="text-sec">
          <h3>{birdName}</h3>
          <p>{birdScientificName}</p>
          <p>{photographerName}</p>
          <p>
            <span className="day">{day}</span>
            <span className="month">{month}</span>
            <span className="year">{year}</span>
          </p>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
}

export default BirdsPhotoTemplate;
