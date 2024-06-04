/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Split from "../Split";
import Link from "next/link";
import AboutUs3date from "../../data/sections/about-us3.json";
import { thumparallax, thumparallaxDown } from "../../common/thumparallax";

const AboutFounder = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/khaled.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">About the Founder</h4>
              <Split>
                <p className="wow txt words chars ">
                  My name is Khaled Saleh, the founder of Business Hub and an
                  expert in business establishment, management, and development
                  with over 10 years of experience. Over the years, I have
                  worked with a diverse range of clients and companies, which
                  has provided me with a deep understanding of the challenges
                  and problems facing the industry.
                </p>
                <p>
                  One of the main challenges I have faced is business
                  development and management, which required innovative
                  approaches and effective strategies to overcome. Through
                  meticulous analysis and hard work, I have been able to develop
                  specific solutions and strategies that have significantly
                  improved performance and increased efficiency.
                </p>
                <p>
                  I have also encountered challenges in project continuity,
                  which required me to implement new techniques and follow best
                  practices to ensure the best results for my clients. My
                  continuous commitment to professional development and lifelong
                  learning has enabled me to adapt my approach to the rapid
                  changes in the market and provide innovative solutions that
                  perfectly meet my clients' needs.{" "}
                </p>
                <p>
                  I believe that challenges are opportunities for learning and
                  growth, and this mindset has helped me achieve great success
                  in my field. If you are looking for a reliable partner to help
                  you achieve your goals, I am here to provide you with the
                  support and expertise you need.
                </p>
              </Split>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
