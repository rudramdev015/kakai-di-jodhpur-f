import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

// Change this line to the new simple name
import introVideo from './intro.mp4'; 

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
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
        src={introVideo} // Use the imported video here
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        playsInline
      />
      
      <div className={`app__video-overlay flex__center ${playVideo ? 'hide-overlay' : ''}`}>
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;