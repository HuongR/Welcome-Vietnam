import React from 'react';
import videoBg from '../../assets/videos/vietnam-intro.mp4'; // Đường dẫn đến video trong thư mục assets

const VideoBackground = () => {
  return (
    <video
      className="w-full h-full object-cover"
      src={videoBg}  // Đường dẫn public trực tiếp
      autoPlay
      muted
      loop
      playsInline
      width="100%"
      height="75%"
    />
  );
}

export default VideoBackground;
