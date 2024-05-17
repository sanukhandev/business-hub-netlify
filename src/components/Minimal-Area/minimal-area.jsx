/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                Our service is ranked among the finest in the UAE. We cultivate
                smart ideas for start-ups and seasoned players.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Message
                  </h6>
                  <p>
                    To be the gateway to safe investment in the UAE and to work
                    to create investment opportunities for investors from
                    outside and within the country by connecting them with the
                    appropriate partner, providing information on all aspects of
                    doing business, and supporting them with sources of local
                    talent that contribute to raising the local value ratio of
                    foreign investors, which has become one of the Main
                    requirements, identifying cost-effective solutions, building
                    large brands within the UAE market, presenting creative
                    ideas to differentiate in the local market, and supporting
                    it with the best marketing strategies and plans that help it
                    be the best among its competitors.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our vision
                  </h6>
                  <p>
                    To be the most trusted partner for all investors in the
                    United Arab Emirates and to become a leader in providing
                    innovative and sustainable solutions that meet the needs of
                    our customers and business partners. We aim to build
                    long-term relationships with our customers based on trust
                    and mutual cooperation, and we seek to achieve joint success
                    by achieving their goals and aspirations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
