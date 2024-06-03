import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import VideoPlayer from "react-background-video-player";

const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <video autoPlay loop muted playsInline className="w-100 h-100">
          <source
            src="https://res.cloudinary.com/dgwddohoe/video/upload/v1717191605/logo_reveal_zon4nu.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* <VideoPlayer
          className="video"
          src={
            "https://res.cloudinary.com/dgwddohoe/video/upload/v1717191605/logo_reveal_zon4nu.mp4"
          }
          autoPlay={true}
          muted={true}
        /> */}
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
