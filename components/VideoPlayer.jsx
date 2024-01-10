"use client";

import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path

  return (
    <>
      <ReactPlayer
        width=""
        className="rounded-lg"
        height="400px"
        url="https://www.youtube.com/live/EHUbgW9vaf0?si=IAi2yGLdMWLC05Yx"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source
        src="https://www.youtube.com/live/EHUbgW9vaf0?si=IAi2yGLdMWLC05Yx"
        type="video/mp4"
      />
    </>
  );
};

export default VideoPlayer;
