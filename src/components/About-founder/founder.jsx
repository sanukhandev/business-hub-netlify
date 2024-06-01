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
              <img className="thumparallax-down" src="/img/khaled.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">About Founder</h4>
              <Split>
                <p className="wow txt words chars ">
                  Mr.Khaled Saleh, founder of Business Hub has established a
                  safe and strategic portal for attracting investors and
                  developing projects in the United Arab Emirates. Leveraging a
                  blend of Emirati management and foreign expertise, the
                  founder's vision encompasses comprehensive consulting services
                  in economic, administrative, and marketing fields. Under the
                  founder's leadership, the company has assembled a team of
                  experts proficient in establishing both large and small
                  projects. These experts boast extensive experience in the UAE
                  markets, particularly in Dubai and Abu Dhabi, where they have
                  successfully implemented projects adhering to the highest
                  standards and specifications. The founder's mission is to
                  create efficient and successful investment opportunities,
                  transforming clients' dreams and ideas into profitable
                  realities while fostering international collaboration.
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
