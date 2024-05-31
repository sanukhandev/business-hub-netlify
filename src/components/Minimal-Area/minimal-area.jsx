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
              <h4 className="wow color-font">About us</h4>
              <p className="wow txt" data-splitting>
                Our service is ranked among the finest in the UAE. We cultivate
                smart ideas for start-ups and seasoned players.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Vision
                  </h6>
                  <p>
                    To be the most trusted partner to all investors in U.A.E
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  <h6>
                    <span>2</span> Our Mission
                  </h6>
                  <p>
                    To create investment opportunities for investors from
                    outside and inside the country by linking them to the right
                    partner and providing information on all aspects of doing
                    business, supporting them wuth local talents sourcesthat
                    contributre to raising the percentage of local value for
                    foreign investors, to build high brands within U.A.E market
                    by providing creative ideas in the local market and
                    supporting them with thr best strategies and marketing plans
                    that helps them to the best among there competitors
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
