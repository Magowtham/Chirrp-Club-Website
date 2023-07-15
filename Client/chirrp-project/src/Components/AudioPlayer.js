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
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
    </div>
  );
};

export default AudioPlayer;
