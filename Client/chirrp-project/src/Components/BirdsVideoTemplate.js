import React from "react";
import "../CSS/BirdsVideoTemplate.css";
import Button from "./Button";

function BirdsVideoTemplate({
  videoSrc = "hello",
  birdName,
  birdScientificName,
  photographer,
  day,
  month,
  year,
  location,
}) {
  return (
    <>
      <div className="birds-template-card">
        <div className="template-video-sec">
          <Button
            title={<i className="material-icons">play_arrow</i>}
            videoBtn={true}
            videoUrl={videoSrc}
          ></Button>
          <video src={videoSrc} controls={false}></video>
        </div>
        <div className="text-sec">
          <h3>{birdName}</h3>
          <p>{birdScientificName}</p>
          <p>{photographer}</p>
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

export default BirdsVideoTemplate;
