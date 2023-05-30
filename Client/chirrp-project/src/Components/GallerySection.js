import React from "react";
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
            <div
              className="card"
              onClick={fullScreenImage.bind({ url: "/Media/bird-1.jpeg" })}
            >
              <div className="image-sec">
                <img src="/Media/bird-1.jpeg" alt="" />
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
            <div
              className="card"
              onClick={fullScreenImage.bind({ url: "/Media/bird-2.jpeg" })}
            >
              <div className="image-sec">
                <img src="/Media/bird-2.jpeg" alt="" />
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
              <div className="image-sec">
                <img src="/Media/bird-3.jpeg" alt="" />
              </div>
              <div className="text-sec">
                <h2>Malabar Grey Hornbill</h2>
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
              <div className="image-sec">
                <img src="/Media/bird-4.jpeg" alt="" />
              </div>
              <div className="text-sec">
                <h2>Flame Throated Bulbul</h2>
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
              <div className="image-sec">
                <img src="/Media/bird-5.jpeg" alt="" />
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
              <div className="image-sec">
                <img src="/Media/bird-6.jpeg" alt="" />
              </div>
              <div className="text-sec">
                <h2>Malabar Trogon</h2>
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
              <div className="image-sec">
                <img src="/Media/bird-7.jpeg" alt="" />
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
            <div className="card">
              <div className="image-sec">
                <img src="/Media/bird-8.jpeg" alt="" />
              </div>
              <div className="text-sec">
                <h2>White Bellied Sea Eagle</h2>
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
