import React, { useRef, useState, useEffect, useCallback } from "react";
import "../CSS/AudioCardTemplate.css";

function AudioCardTemplate({ audioSrc, bodyColor, beakColor }) {
  const [isAudioPlaying, setAudioPlaying] = useState(false);
  const beakUpRef = useRef(null);
  const beakDownRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
      beakUpRef.current.style.setProperty("--beakup", "infinite");
      beakDownRef.current.style.setProperty("--beakdown", "infinite");
    } else {
      audioRef.current.pause();
      beakUpRef.current.style.setProperty("--beakup", 0);
      beakDownRef.current.style.setProperty("--beakdown", 0);
    }
  }, [isAudioPlaying]);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <div className="audio-card">
        <div className="animation-sec">
          <div className="frame">
            <div className="bird">
              <div className="bird__head" style={{ background: bodyColor }}>
                <div className="bird__eye"></div>
              </div>
              <div className="bird__beak">
                <div
                  className="up-beak"
                  ref={beakUpRef}
                  style={{ borderLeftColor: beakColor }}
                ></div>
                <div
                  className="down-beak"
                  ref={beakDownRef}
                  style={{ borderLeftColor: beakColor }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sec">
          <h3>Call</h3>
          <button
            onClick={() => {
              setAudioPlaying(!isAudioPlaying);
            }}
          >
            <i className="material-icons">
              {isAudioPlaying ? "pause" : "play_arrow"}
            </i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AudioCardTemplate;
