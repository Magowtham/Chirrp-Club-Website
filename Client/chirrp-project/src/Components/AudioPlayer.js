import React, { useState, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef} src="/Media/bird1.mp3" />
      {isPlaying ? (
        <button onClick={handlePause} className="">
          <i className="material-icons">pause</i>
        </button>
      ) : (
        <button onClick={handlePlay}>
          {" "}
          <i className="material-icons">play_arrow</i>
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;
