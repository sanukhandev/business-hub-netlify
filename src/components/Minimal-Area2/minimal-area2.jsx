/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
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
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Boost your business affordably with our virtual company
                  service. Say goodbye to unnecessary costs and hello to
                  streamlined operations. Our expert team handles everything
                  from accounting to project management, helping you achieve
                  more while spending less. Let&apos;s grow your business
                  together!
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Reducing operational costs
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  Providing flexibility
                </li>
                <li className="wow fadeInUp" data-wow-delay=".8s">
                  Administrative efficiency
                </li>
              </ul>
              <Link href={`/about/about-light`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Discover</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
