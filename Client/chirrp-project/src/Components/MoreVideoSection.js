import React from "react";
import "../CSS/MoreVideoSection.css";
import TemplateInfo from "./TemplateInfo";
import Button from "./Button";
function MoreVideoSection() {
  return (
    <>
      <TemplateInfo
        bannerHeading="Chirrp"
        bannerSubHeading="Video Gallery"
        bannerParagraph="  A centre dedicated to open-source software and hardware at the
              National Institute of Technology Karnataka, Surathkal, Mangalore,
              India."
        bannerImage="https://wallpaperset.com/w/full/8/3/6/93556.jpg"
      />
      <div className="morevideo-container">
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
              <div className="video-sec">
                <Button
                  title={<i className="material-icons">play_arrow</i>}
                  videoBtn={true}
                  videoUrl="/Media/v1.mp4"
                ></Button>

                {<video src="/Media/v1.mp4" controls={false}></video>}
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
        </section>
      </div>
    </>
  );
}

export default MoreVideoSection;
