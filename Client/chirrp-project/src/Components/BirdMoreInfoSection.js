import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import BirdsPhotoTemplate from "./BirdsPhotoTemplate";
import BirdsVideoTemplate from "./BirdsVideoTemplate";
import "leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.js";
// import "leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.css";
import "leaflet/dist/leaflet.css";
import "../CSS/BirdMoreInfoSection.css";
function BirdsMoreInfoSection() {
  const observeRef = useRef(null);
  const photoCaptureRef = useRef(null);
  const videoCaptureRef = useRef(null);
  const counter = (element, start, end, duration) => {
    let current = start;
    const step = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      current += 1;
      element.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  };

  useEffect(() => {
    counter(observeRef.current, 0, 400, 5000);
    counter(photoCaptureRef.current, 0, 400, 4000);
    counter(videoCaptureRef.current, 0, 400, 3000);
  });
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
              <span ref={observeRef}>0</span>
              <span>observatios</span>
            </div>
            <div className="statastics-logo-sec">
              <i className="material-icons">photo_camera</i>
              <span ref={photoCaptureRef}>0</span>
              <span>with photos</span>
            </div>
            <div className="statastics-logo-sec">
              <i className="material-icons">videocam</i>
              <span ref={videoCaptureRef}>0</span>
              <span>with videos</span>
            </div>
          </div>
        </div>
        <div className="bird-media-sec">
          <div className="banner-image">
            <img src="/Media/bird-7.jpeg" alt="" />
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
      <div className="pipe pipe1"></div>
      <div className="indentification-sec">
        <h1>Indentification</h1>
        <p>
          Brightly-colored but sluggish medium-sized bird. Unmistakable; the
          only trogon in its range. Male has black head, white “belt,” and
          bright red belly. Female has a brown head and orangish underparts.
          Both sexes have a bright blue bill. Sits quietly in the middle levels
          of forests, often near bamboo clusters; also follows mixed-species
          foraging flocks. Gives a series of inflected yelps: “kweh, kweh, kweh.
        </p>
      </div>
      <div className="pipe pipe2"></div>
      <div className="stastics-sec">
        <h1>Statistics</h1>
        <div className="pipe pipe3"></div>
        <div className="bar-chart">
          <h2>BarChart</h2>
        </div>
        <div className="pipe pipe4"></div>
        <div className="map">
          <h2>Location</h2>
          <MapContainer
            center={[23.512, 80.329]}
            zoom={2}
            maxBounds={[
              [33.2778, 75.3412],
              [8.0844, 77.5495],
            ]}
            minZoom={5}
            maxZoom={18}
            maxBoundsViscosity={1.0}
            className="map-container"
          >
            <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mlxXWj5uMNAXHCVKX1eX" />
          </MapContainer>
        </div>
      </div>
      <div className="pipe pipe5"></div>
      <div className="allmedia-sec">
        <h1>All Media</h1>
        <div className="pipe pipe4"></div>
        <div className="photo-sec">
          <h2>Captured Photos</h2>
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
        </div>
        <div className="pipe pipe6"></div>
        <div className="video-sec">
          <h2>Captured Videos</h2>
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
        </div>
      </div>
    </>
  );
}

export default BirdsMoreInfoSection;
