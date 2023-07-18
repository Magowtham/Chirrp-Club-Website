import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import BirdsPhotoTemplate from "./BirdsPhotoTemplate";
import BirdsVideoTemplate from "./BirdsVideoTemplate";
import AudioCardTemplate from "./AudioCardTemplate";
import "../CSS/AudioCardTemplate.css";
import "leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.js";
import Navbar from "./Navbar";

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

  const adjustPipeGap = () => {
    const totalPipegap = (15 / 100) * window.innerWidth;
    document.documentElement.style.setProperty(
      "--birdInfoPipeWidth",
      `${totalPipegap - ((10 / 100) * window.innerWidth + 30)}px`
    );
  };

  useEffect(() => {
    counter(observeRef.current, 0, 400, 5000);
    counter(photoCaptureRef.current, 0, 400, 4000);
    counter(videoCaptureRef.current, 0, 400, 3000);

    window.addEventListener("resize", adjustPipeGap);
    adjustPipeGap();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="birds-moreinfo-container">
        <div className="bird-info-sec">
          <div className="heading-sec">
            <h1>Oriental Magpie Robin</h1>
            <h2>Harpactes fasciatusfir</h2>
            <h2>ಮಲಬಾರ್ ಟ್ರೋಗನ್ </h2>
          </div>
          <div className="scientific-info-sec">
            <div className="node-sec">
              <ul>
                <li>
                  <span>1</span>
                </li>
                <hr />
                <li>
                  <span>2</span>
                </li>
                <hr />
                <li>
                  <span>3</span>
                </li>
                <hr />
                <li>
                  <span>4</span>
                </li>
                <hr />
                <li>
                  <span>5</span>
                </li>
                <hr />
                <li>
                  <span>6</span>
                </li>
                <hr />
                <li>
                  <span>7</span>
                </li>
              </ul>
            </div>
            <div className="biologoical-order-sec">
              <h2>KINGDOM</h2>
              <h2>PHYLUM</h2>
              <h2>CLASS</h2>
              <h2>ORDER</h2>
              <h2>FAMILY</h2>
              <h2>GENUS</h2>
              <h2>SPECIES</h2>
            </div>
            <div className="biological-data-sec">
              <h2>Animalia</h2>
              <h2>Chordata</h2>
              <h2>Aves</h2>
              <h2>Trogoniformes</h2>
              <h2>Trogonidae</h2>
              <h2>Harpactes</h2>
              <h2>Harpactes fasciatus</h2>
            </div>
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
      <div className="bird-briefinfo-sec">
        <h2>Indentification</h2>
        <p>
          Brightly-colored but sluggish medium-sized bird. Unmistakable; the
          only trogon in its range. Male has black head, white “belt,” and
          bright red belly. Female has a brown head and orangish underparts.
          Both sexes have a bright blue bill. Sits quietly in the middle levels
          of forests, often near bamboo clusters; also follows mixed-species
          foraging flocks. Gives a series of inflected yelps: “kweh, kweh, kweh.
        </p>
        <div className="pipe pipe2"></div>
        <h2>Appearance</h2>
        <p>
          Like most other trogons, these birds are brightly coloured and
          sexually dimorphic. The male has a slaty black head and breast with a
          white border to the black bib separating it from the crimson on the
          underside. The back is olive-brown to chestnut. The wing coverts are
          black with fine white vermiculations. They have 12 tail feathers that
          are graduated. The central tail-feathers are chestnut with a black
          tip, with the second and third pairs from the middle having more black
          than chestnut. The outer three pairs have long white tips. The female
          lacks the contrasting black and crimson and has only a slightly darker
          head and breast that shades into the olive brown on the back while the
          crimson of the underside of the male is replaced by ochre. In both
          sexes, the beak is bluish as is the skin around the eye. The iris is
          dark brown and the feet are pale bluish. The nostrils are covered by
          tufts of filoplumes. The feet are heterodactyl, a feature unique to
          the trogons, with the digits I and II facing back and digits III and
          IV pointing forward. In most birds I, II and III face forward while IV
          faces back and in zygodactyly II and III face forward while I and IV
          face backwards.
        </p>
        <div className="pipe pipe3"></div>
        <h2>Habits and Lifestyle</h2>
        <p>
          These birds usually perch still, especially when alarmed and will
          sometimes clinging laterally to branches. When calling they sometimes
          raise and lower their tail. The call is a series of guttural or
          purring notes. The song of the male is a series of percussive kyau
          calls. The breeding season in India is mainly February to May (before
          the Monsoons) while it is March to June in Sri Lanka.
        </p>
        <div className="pipe pipe4"></div>
        <h2>Diet and Nutrition</h2>
        <p>
          These birds usually perch still, especially when alarmed and will
          sometimes clinging laterally to branches. When calling they sometimes
          raise and lower their tail. The call is a series of guttural or
          purring notes. The song of the male is a series of percussive kyau
          calls. The breeding season in India is mainly February to May (before
          the Monsoons) while it is March to June in Sri Lanka.
        </p>
      </div>
      {/* <div className="stastics-sec">
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
            maxZoom={30}
            maxBoundsViscosity={1.0}
            className="map-container"
          >
            <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mlxXWj5uMNAXHCVKX1eX" />
          </MapContainer>
        </div>
      </div> */}
      <div className="pipe pipe8"></div>
      <div className="allmedia-sec">
        <h1>All Media</h1>
        <div className="audio-sec">
          <h2>Audios</h2>
          <div className="grid">
            <AudioCardTemplate audioSrc="/Media/bird1.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird2.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird1.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird2.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird1.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird2.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird1.mp3" />
            <AudioCardTemplate audioSrc="/Media/bird2.mp3" />
          </div>
        </div>
        <div className="pipe pipe9"></div>
        <div className="photo-sec">
          <h2>Photos</h2>
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
        <div className="pipe pipe10"></div>
        <div className="video-sec">
          <h2>Videos</h2>
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
