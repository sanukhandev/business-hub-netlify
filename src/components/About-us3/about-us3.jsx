/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Split from "../Split";
import Link from "next/link";
import AboutUs3date from "../../data/sections/about-us3.json";
import { thumparallax, thumparallaxDown } from "../../common/thumparallax";

const AboutUs3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="imgsec md-mb50">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgone big-bord wow fadeInDown"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="thumparallax-down"
                        src={AboutUs3date.image1}
                        alt=""
                      />
                    </div>
                    <div className="exp">
                      <h2 className="nmb-font">{AboutUs3date.exp.nmb}</h2>
                      <h6>{AboutUs3date.exp.name}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgtwo big-bord wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <img
                        className="thumparallax"
                        src={AboutUs3date.image2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <Split>
                <h4 className="wow words chars splitting" data-splitting>
                  Our Excellence
                  {/* {about.attributes.Heading} */}
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  At Business Hub, we provide comprehensive solutions for
                  business establishment in both free zones and mainland. As an
                  all-encompassing platform for entrepreneurs, we ensure a
                  seamless experience by offering a diverse range of business
                  support services in a customer-centric environment, making us
                  the ideal choice for obtaining business licenses in the UAE.
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  With over 2000 business activities, Business Hub offers a wide
                  array of business licenses across various sectors, enabling
                  entrepreneurs to explore limitless business opportunities.
                  Whether your company is commercial, industrial, or
                  service-oriented, we provide the necessary licenses,
                  approvals, and facilities to meet the requirements of your
                  project.
                </p>
              </Split>
              <Link href={`/about`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>{AboutUs3date.smallTitle}</span>
                </a>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default AboutUs3;
