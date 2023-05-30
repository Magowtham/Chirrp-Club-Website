import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../CSS/VideoGallerySection.css";

function VideoGallerySection() {
  return (
    <>
      <div className="videogallery-container">
        <h1>Video Captures</h1>
        <section className="gallery">
          <div className="grid">
            <div className="card">
              <div className="video-sec">
                <Button
                  title={<i className="material-icons">play_arrow</i>}
                  videoBtn={true}
                  videoUrl="/Media/v1.mp4"
                ></Button>
                <video src="/Media/v1.mp4" controls={false}></video>
              </div>
              <div className="text-sec">
                <h2>Malabar Whistling Thrush</h2>
                <p>myophonous horsfieldii</p>
                <p>Mike Prince</p>
                <p>
                  <span className="day">23</span>
                  <span className="month">Nov</span>
                  <span className="year">2016</span>
                </p>
                <p>Shobhavana Campus</p>
              </div>
            </div>
            <div className="card">
              <div className="video-sec">
                <Button
                  title={<i className="material-icons">play_arrow</i>}
                  videoBtn={true}
                  videoUrl="/Media/v1.mp4"
                ></Button>

                <video src="/Media/v1.mp4" controls={false}></video>
              </div>
              <div className="text-sec">
                <h2>Barn Swallow</h2>
                <p>myophonous horsfieldii</p>
                <p>Mike Prince</p>
                <p>
                  <span className="day">23</span>
                  <span className="month">Nov</span>
                  <span className="year">2016</span>
                </p>
                <p>Shobhavana Campus</p>
              </div>
            </div>
            <div className="card">
              <div className="video-sec">
                <Button
                  title={<i className="material-icons">play_arrow</i>}
                  videoBtn={true}
                  videoUrl="/Media/v1.mp4"
                ></Button>

                <video src="/Media/v1.mp4" controls={false}></video>
              </div>
              <div className="text-sec">
                <h2>Shikra</h2>
                <p>myophonous horsfieldii</p>
                <p>Mike Prince</p>
                <p>
                  <span className="day">23</span>
                  <span className="month">Nov</span>
                  <span className="year">2016</span>
                </p>
                <p>Shobhavana Campus</p>
              </div>
            </div>
            <div className="card">
              <div className="video-sec">
                <Button
                  title={<i className="material-icons">play_arrow</i>}
                  videoBtn={true}
                  videoUrl="/Media/v1.mp4"
                ></Button>
                <video src="/Media/v1.mp4" controls={false}></video>
              </div>
              <div className="text-sec">
                <h2>Grey Headed Canary Flycatcher</h2>
                <p>myophonous horsfieldii</p>
                <p>Mike Prince</p>
                <p>
                  <span className="day">23</span>
                  <span className="month">Nov</span>
                  <span className="year">2016</span>
                </p>
                <p>Shobhavana Campus</p>
              </div>
            </div>
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
