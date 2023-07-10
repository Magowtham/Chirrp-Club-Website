import React, { useEffect, useState } from "react";
import BirdsVideoTemplate from "./BirdsVideoTemplate";
import Button from "./Button";
import "../CSS/VideoGallerySection.css";

function VideoGallerySection() {
  return (
    <>
      <div className="videogallery-container">
        <h1>Video Captures</h1>
        <section className="gallery">
          <div className="grid">
            <BirdsVideoTemplate
              videoSrc="/Media/v1.mp4"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographer="Mike Prince"
              day="23"
              month="Nov"
              year="2020"
              location="Shobhavana Campus"
            />
          </div>
          <div className="btn-sec">
            <Button
              title="view all videos"
              videoBtn={false}
              routTo="videoGallery"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoGallerySection;
