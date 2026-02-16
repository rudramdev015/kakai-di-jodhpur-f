import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

// Video Import
import introVideo from './intro.mp4'; 
import './Intro.css';

const Intro = () => {
  // Start as true because autoPlay is enabled
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={introVideo}
        ref={vidRef}
        type="video/mp4"
        loop
        autoPlay
        muted
        controls={false}
        playsInline
      />
      
      {/* The overlay is always there, but gets lighter when playing */}
      <div className={`app__video-overlay flex__center ${playVideo ? 'hide-overlay' : ''}`}>
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className="video-icon" color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill className="video-icon" color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;