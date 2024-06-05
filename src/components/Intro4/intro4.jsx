import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import VideoPlayer from "react-background-video-player";
import useMediaQuery from "../Hooks/UseMediaQuery";

import { TypeAnimation } from "react-type-animation";

const Intro4 = ({ sliderRef, blackStar }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <header ref={sliderRef} className="particles circle-bg valign ">
      <div className="container">
        {!isMobile ? (
          <video autoPlay loop muted playsInline className="w-100 h-100">
            <source
              src="https://res.cloudinary.com/dgwddohoe/video/upload/v1717191605/logo_reveal_zon4nu.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont text-center">
                <h1 className="color-font">
                  <TypeAnimation
                    sequence={[
                      "Begin\n your project in the U.A.E with\n Business Hub.",
                      1000, // Wait for 1 second at the end
                    ]}
                    speed={5} // Custom typing speed
                    wrapper="span" // Animation will wrap in a span
                    cursor={false}
                    repeat={0} // Repeat the animation 0 times (i.e., do not loop)
                  />
                </h1>
              </div>
            </div>
          </div>
        )}

        {/* <VideoPlayer
          className="video"
          src={
            "https://res.cloudinary.com/dgwddohoe/video/upload/v1717191605/logo_reveal_zon4nu.mp4"
          }
          autoPlay
          muted
          playsInline
        />
 */}

      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      {isMobile && (
        <>
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
          <div className="line bottom left"></div>
        </>
      )}
    </header>
  );
};

export default Intro4;
