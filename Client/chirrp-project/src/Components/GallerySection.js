import React from "react";
import BirdsPhotoTemplate from "./BirdsPhotoTemplate";
import "../CSS/GallerySection.css";
import Button from "./Button";

function GallerySection() {
  function fullScreenImage() {
    window.location.href = this.url;
  }

  return (
    <>
      <div className="gallerysection-container">
        <section className="gallery">
          <h1>Gallery</h1>
          <div className="grid">
            <BirdsPhotoTemplate
              onClickRout={{ url: "/Media/bird-1.jpeg" }}
              imageSrc="/Media/bird-1.jpeg"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographerName="Mike Prince"
              day="23"
              month="Nov"
              year="2016"
              location="Shobhavana Campus"
            />
            <BirdsPhotoTemplate
              onClickRout={{ url: "/Media/bird-2.jpeg" }}
              imageSrc="/Media/bird-2.jpeg"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographerName="Mike Prince"
              day="23"
              month="Nov"
              year="2016"
              location="Shobhavana Campus"
            />
            <BirdsPhotoTemplate
              onClickRout={{ url: "/Media/bird-3.jpeg" }}
              imageSrc="/Media/bird-3.jpeg"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographerName="Mike Prince"
              day="23"
              month="Nov"
              year="2016"
              location="Shobhavana Campus"
            />
            <BirdsPhotoTemplate
              onClickRout={{ url: "/Media/bird-1.jpeg" }}
              imageSrc="/Media/bird-4.jpeg"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographerName="Mike Prince"
              day="23"
              month="Nov"
              year="2016"
              location="Shobhavana Campus"
            />
            <BirdsPhotoTemplate
              onClickRout={{ url: "/Media/bird-1.jpeg" }}
              imageSrc="/Media/bird-1.jpeg"
              birdName="Malabar Whistling Thrush"
              birdScientificName="myophonous horsfieldii"
              photographerName="Mike Prince"
              day="23"
              month="Nov"
              year="2016"
              location="Shobhavana Campus"
            />
          </div>
          <Button
            title="view all posts"
            videoBtn={false}
            routTo="photoGallery"
          />
        </section>
      </div>
    </>
  );
}

export default GallerySection;
