// components/BackgroundVideo.tsx
import React from 'react';

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 z-0 object-cover w-full h-full"
    >
      <source src="https://videos.pexels.com/video-files/5803065/5803065-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
