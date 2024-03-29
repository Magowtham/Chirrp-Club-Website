import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import GallerySection from "../Components/GallerySection";
import Test from "../Components/Test";
import VideoGallerySection from "../Components/VideoGallerySection";
import TemplateInfo from "../Components/TemplateInfo";
import MoreAboutSection from "../Components/MoreAboutSection";
import Team from "../Components/Team";
import TeamCardTemplate from "../Components/TeamCardTemplate";
import TeamSlider from "../Components/TeamSlider";
import "../CSS/Home.css";
import BirdsMoreInfoSection from "../Components/BirdMoreInfoSection";
import AudioPlayer from "../Components/AudioPlayer";

function Home() {
  const [overlay, setOverlay] = useState(true);
  return (
    <div className={`home ${overlay ? `` : `overlay`}`}>
      {/* <HeroSection setOverlay={setOverlay} />
      <AboutSection />
      <GallerySection />
      <VideoGallerySection />
      <Team /> */}
      {/* <BirdsMoreInfoSection /> */}
      <Test />
    </div>
  );
}

export default Home;
