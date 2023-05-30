import React, { useRef, useEffect, useState } from "react";
import "../CSS/AboutSection.css";
import Button from "./Button";
function AboutSection() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [media, setMedia] = useState(false);
  const windowResize = () => {
    if (window.innerWidth <= 760) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  };
  window.addEventListener("resize", windowResize);
  const aboutvideoRef = useRef(null);
  const videoRef = useRef(null);
  const playPauseBtnRef = useRef(null);
  const playPauseBtnIconRef = useRef(null);
  const progressBarRef = useRef(null);
  const skipBackwordRef = useRef(null);
  const skipForwardRef = useRef(null);
  const volumeBtnRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const speedBtnRef = useRef(null);
  const speedOptionsRef = useRef(null);
  window.addEventListener("resize", windowResize);
  useEffect(() => {
    windowResize();
    const aboutvideo = aboutvideoRef.current;
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const skipBackword = skipBackwordRef.current;
    const skipForward = skipForwardRef.current;
    const playPauseBtn = playPauseBtnRef.current;
    const playPauseBtnIcon = playPauseBtnIconRef.current;
    const volumeBtn = volumeBtnRef.current;
    const volumeSlider = volumeSliderRef.current;
    const speedBtn = speedBtnRef.current;
    const speedOptions = speedOptionsRef.current;
    const picInPicBtn = document.querySelector(".pic-in-pic i");
    const fullscreenBtn = document.querySelector(".fullscreen i");
    const videoTimeline = document.querySelector(".video-timeline");
    const progressBarTime = document.querySelector(".current-time");
    const videoDuration = document.querySelector(".video-duration");
    let timer;
    const handlePlayPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    const handlePlayPauseKeyPress = (e) => {
      if (e.key == " ") {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };
    const handlePauseClass = () => {
      playPauseBtnIcon.innerText = "pause";
    };

    const handlePlayClass = () => {
      playPauseBtnIcon.innerText = "play_arrow";
    };

    const hideControls = () => {
      if (videoRef.current.paused) return;
      timer = setTimeout(() => {
        aboutvideo.classList.remove("show-controls");
      }, 3000);
    };
    hideControls();

    const formatTime = (time) => {
      let seconds = Math.floor(time % 60);
      let minutes = Math.floor(time / 60) % 60;
      let hours = Math.floor(time / 3600);

      seconds = seconds < 10 ? `0${seconds}` : seconds;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      hours = hours < 10 ? `0${hours}` : hours;
      if (hours == 0) {
        return `${minutes}:${seconds}`;
      }
      return `${hours}:${minutes}:${seconds}`;
    };

    const progressBarUpdater = (e) => {
      let { currentTime, duration } = e.target;
      let percent = (currentTime / duration) * 100;
      progressBar.style.width = `${percent}%`;
      progressBarTime.innerText = formatTime(currentTime);
    };
    const skipBackwordUpdater = () => {
      videoRef.current.currentTime -= 5;
    };

    const skipForwardUpdater = () => {
      videoRef.current.currentTime += 5;
    };

    const volumeUpdater = () => {
      if (!(volumeBtn.innerText === "volume_up")) {
        video.volume = 0.5;
        volumeBtn.innerText = "volume_up";
      } else {
        video.volume = 0.0;
        volumeBtn.innerText = "volume_mute";
      }
    };

    const volumeSliderUpdater = (e) => {
      video.volume = e.target.value;
    };

    const speedBtnHandler = () => {
      speedOptions.classList.toggle("show");
    };

    speedOptions.querySelectorAll("li").forEach((ref) => {
      ref.addEventListener("click", () => {
        videoRef.current.playbackRate = ref.dataset.speed;
        speedOptions.querySelector(".active").classList.remove("active");
        ref.classList.add("active");
      });
    });
    const handleFullScreen = () => {
      const videoElement = videoRef.current;

      if (!isFullScreen) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen().catch((error) => {
            console.log("Failed to enter fullscreen mode:", error);
          });
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen().catch((error) => {
            console.log("Failed to enter fullscreen mode:", error);
          });
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen().catch((error) => {
            console.log("Failed to enter fullscreen mode:", error);
          });
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen().catch((error) => {
            console.log("Failed to enter fullscreen mode:", error);
          });
        }
        setIsFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch((error) => {
            console.log("Failed to exit fullscreen mode:", error);
          });
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen().catch((error) => {
            console.log("Failed to exit fullscreen mode:", error);
          });
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen().catch((error) => {
            console.log("Failed to exit fullscreen mode:", error);
          });
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen().catch((error) => {
            console.log("Failed to exit fullscreen mode:", error);
          });
        }
        setIsFullScreen(false);
      }
    };

    const videoTimeLineUpdater = (e) => {
      const timelineWidth = videoTimeline.clientWidth;
      const duration = videoRef.current.duration;
      const offsetX = e.offsetX;
      const currentTime = (offsetX / timelineWidth) * duration;

      if (duration && isFinite(currentTime)) {
        const newTime = Math.max(0, Math.min(duration, currentTime));
        videoRef.current.currentTime = newTime;
      }
    };

    const draggableProgressBar = (e) => {
      let timelineWidth = videoTimeline.clientWidth;
      progressBar.style.width = `${e.offsetX}px`;
      videoRef.current.currentTime =
        (e.offsetX / timelineWidth) * videoRef.current.duration;
      progressBarTime.innerText = formatTime(videoRef.current.currentTime);
    };
    // const speedBtnRemover = (e) => {
    //   if (
    //     e.target.tagName !== "SPAN" ||
    //     e.target.className !== "material-icons"
    //   ) {
    //     speedOptions.classList.remove("show");
    //   }
    // };

    playPauseBtn.addEventListener("click", handlePlayPause);
    window.addEventListener("keypress", handlePlayPauseKeyPress);
    video.addEventListener("play", handlePauseClass);
    video.addEventListener("pause", handlePlayClass);
    aboutvideo.addEventListener("mousemove", () => {
      aboutvideo.classList.add("show-controls");
      clearTimeout(timer);
      hideControls();
    });
    video.addEventListener("timeupdate", progressBarUpdater);
    skipBackword.addEventListener("click", skipBackwordUpdater);
    skipForward.addEventListener("click", skipForwardUpdater);
    volumeBtn.addEventListener("click", volumeUpdater);
    volumeSlider.addEventListener("input", volumeSliderUpdater);
    speedBtn.addEventListener("click", speedBtnHandler);
    picInPicBtn.addEventListener("click", () => {
      const video = videoRef.current;
      if (document.pictureInPictureElement === video) {
        // Video is already in Picture-in-Picture mode
        return;
      }

      if (
        document.pictureInPictureEnabled &&
        video &&
        typeof video.requestPictureInPicture === "function"
      ) {
        video.requestPictureInPicture().catch((error) => {
          console.error("Failed to enter Picture-in-Picture mode:", error);
        });
      }
    });
    fullscreenBtn.addEventListener("click", handleFullScreen);
    videoTimeline.addEventListener("click", videoTimeLineUpdater);
    videoRef.current.addEventListener("loadeddata", (e) => {
      videoDuration.innerText = formatTime(e.target.duration);
    });
    videoTimeline.addEventListener("mousedown", () => {
      videoTimeline.addEventListener("mousemove", draggableProgressBar);
    });
    aboutvideo.addEventListener("mouseup", () => {
      videoTimeline.removeEventListener("mousemove", draggableProgressBar);
    });
    videoTimeline.addEventListener("mousemove", (e) => {
      const progressTime = videoTimeline.querySelector("span");
      let offsetX = e.offsetX;
      progressTime.style.left = `${offsetX}px`;
      let timelineWidth = videoTimeline.clientWidth;
      let percent = (e.offsetX / timelineWidth) * videoRef.current.duration;
      progressTime.innerText = formatTime(percent);
    });
    // document.addEventListener("click", speedBtnRemover);
    return () => {
      playPauseBtn.removeEventListener("click", handlePlayPause);
      video.removeEventListener("play", handlePauseClass);
      video.removeEventListener("pause", handlePlayClass);
      window.removeEventListener("keypress", handlePlayPauseKeyPress);
      video.removeEventListener("timeupdate", progressBarUpdater);
      skipBackword.removeEventListener("click", skipBackwordUpdater);
      skipForward.removeEventListener("click", skipForwardUpdater);
      volumeBtn.removeEventListener("click", volumeUpdater);
      volumeSlider.removeEventListener("input", volumeSliderUpdater);
      speedBtn.removeEventListener("click", speedBtnHandler);
      videoTimeline.removeEventListener("click", videoTimeLineUpdater);
      // document.removeEventListener("click", speedBtnRemover);
    };
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-video  show-controls" ref={aboutvideoRef}>
          <div className={`wrapper ${media ? `hide` : ``}`}>
            <div className="video-timeline">
              <div className="progress-area">
                <span>0:00</span>
                <div className="progress-bar" ref={progressBarRef}></div>
              </div>
            </div>
            <ul className="video-controls">
              <li className="options left">
                <button className="volume">
                  <i className="material-icons" ref={volumeBtnRef}>
                    volume_up
                  </i>
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  ref={volumeSliderRef}
                />
                <div className="video-timer">
                  <p className="current-time">00:00</p>
                  <p className="separator">/</p>
                  <p className="video-duration">00:00</p>
                </div>
              </li>
              <li className="options center">
                <button className="skip-backward" ref={skipBackwordRef}>
                  <i className="material-icons">fast_rewind</i>
                </button>
                <button className="play-pause" ref={playPauseBtnRef}>
                  <i className="material-icons" ref={playPauseBtnIconRef}>
                    play_arrow
                  </i>
                </button>
                <button className="skip-forward" ref={skipForwardRef}>
                  <i className="material-icons">fast_forward</i>
                </button>
              </li>
              <li className="options right">
                <div className="playback-content">
                  <button className="playback-speed">
                    <i className="material-icons" ref={speedBtnRef}>
                      slow_motion_video
                    </i>
                  </button>
                  <ul className="speed-options" ref={speedOptionsRef}>
                    <li data-speed="2">2x</li>
                    <li data-speed="1.5">1.5x</li>
                    <li className="active" data-speed="1">
                      Normal
                    </li>
                    <li data-speed="0.75">0.75x</li>
                    <li data-speed="0.5">0.5x</li>
                  </ul>
                </div>
                <button className="pic-in-pic">
                  <i className="material-icons">picture_in_picture_alt</i>
                </button>
                <button className="fullscreen">
                  <i className="material-icons">fullscreen</i>
                </button>
              </li>
            </ul>
          </div>
          <div className="media-play-btn">
            <Button
              title={<i className="material-icons">play_arrow</i>}
              videoBtn={true}
              videoUrl="/Media/bird-video.mp4"
            ></Button>
          </div>
          <video src="/Media/v1.mp4" ref={videoRef}></video>
        </div>
        <div className="about-text">
          <h1>About us</h1>
          <p>
            Formed in October 2021 by a team of enthusiastic faculty members,
            the Centre for Open-Source Software and Hardware (COSH) at NITK
            Surathkal has a broad multidisciplinary objective of serving society
            through research, education, and development of open-source
            technologies, and is the first of its kind in India.
          </p>
          <Button title="More about club" videoBtn={false} routTo="moreAbout" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
