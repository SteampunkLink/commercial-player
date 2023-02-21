import React, { useRef, useState } from 'react'

const VideoPlayer = ({ source }) => {
  const vidRef = useRef();
  const [ isPlaying, togglePlaying ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [ timeStamp, setTimeStamp ] = useState("00:00");
  const [ volume, setVolume ] = useState(5);

  const handleToggleVideo = () => {
    if (isPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    vidRef.current.volume = volume / 10;
    togglePlaying(!isPlaying);
  };

  const handleProgressBar = (e) => {
    if (isNaN(e.target.duration)) {
      return
    }
    setProgress((e.target.currentTime / e.target.duration) * 100);
    let minutes = Math.floor(vidRef.current.currentTime / 60);
    if (minutes < 10) minutes = "0" + String(minutes);

    let seconds = Math.floor(vidRef.current.currentTime % 60);
    if (seconds < 10) seconds = "0" + String(seconds);

    setTimeStamp(`${minutes}:${seconds}`);
  };

  const setProgressBar = (e) => {
    vidRef.current.currentTime = (+e.target.value * vidRef.current.duration) / 100;
  };

  const increaseVol = () => {
    let newVol;
    if (volume < 10) {
      newVol = volume + 1;
    }
    setVolume(newVol);
    vidRef.current.volume = newVol / 10;
  };

  const decreaseVol = () => {
    let newVol;
    if (volume > 0) {
      newVol = volume - 1;
    }
    setVolume(newVol);
    vidRef.current.volume = newVol / 10;
  };

  return (
    <div className="video-container">
      <video src={source} ref={vidRef} onTimeUpdate={handleProgressBar} />
      <div className="video-controls">
        <button onClick={handleToggleVideo}>{ isPlaying ? "Pause" : "Play" }</button>
        <input
          type="range"
          className="progress"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={setProgressBar}
        />
        <span className="timestamp">{timeStamp}</span>
        <button onClick={increaseVol}>Up</button>
        <span className="volume">{volume}</span>
        <button onClick={decreaseVol}>Dn</button>
      </div>
    </div>
  )
}

export default VideoPlayer
