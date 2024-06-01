import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import VideoPlayer from "react-background-video-player";
import svg from "./skyline.svg";
const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
      <VideoPlayer
        className="video"
        src={
          "https://res.cloudinary.com/dgwddohoe/video/upload/v1717191605/logo_reveal_zon4nu.mp4"
        }
        autoPlay={true}
        muted={true}
      />
      </div>
      <div className="App">
      
    
    </div>
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
