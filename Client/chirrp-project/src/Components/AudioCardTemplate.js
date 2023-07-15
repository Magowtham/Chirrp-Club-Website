import React, { useRef, useState, useEffect, useCallback } from "react";

function AudioCardTemplate({ audioSrc }) {
  const [isAudioPlaying, setAudioPlaying] = useState(false);
  const birdBeakRef = useRef();
  const audio = new Audio(audioSrc);
  console.log(isAudioPlaying);
  // useEffect(() => {
  //   if (isAudioPlaying) {
  //     audio.play();
  //     document.documentElement.style.setProperty("--beakUp", "infinite");
  //     document.documentElement.style.setProperty("--beakDown", "infinite");
  //   } else {
  //     audio.pause();
  //     document.documentElement.style.setProperty("--beakUp", 0);
  //     document.documentElement.style.setProperty("--beakDown", 0);
  //   }
  // }, [isAudioPlaying]);

  return (
    <>
      <div className="audio-card">
        <div className="animation-sec">
          <div className="frame">
            <div className="bird">
              <div className="bird__head">
                <div className="bird__eye"></div>
              </div>
              <div className="bird__beak" ref={birdBeakRef}></div>
            </div>
          </div>
        </div>
        <div className="text-sec">
          <h3>Call</h3>
          <button
            onClick={() => {
              setAudioPlaying(!isAudioPlaying);
              if (isAudioPlaying) {
                audio.play();
              } else {
                audio.pause();
              }
            }}
          >
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AudioCardTemplate;
