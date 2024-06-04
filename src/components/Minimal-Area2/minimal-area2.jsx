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
              <h4 className="color-font"> Our Key Services </h4>
              <h6> Reduce Operational Costs:</h6>
              <p>
                Significantly lower expenses related to salaries and human
                resources.
              </p>
              <h6>Administrative Efficiency:</h6>
              <p>
                Gain support from a specialized team covering all essential
                business management functions.
              </p>
              <h6>Provide Flexibility:</h6>
              <p>
                Manage your business from anywhere in the world without the need
                for a physical office, offering high flexibility for business
                expansion.
              </p>

              <h4>How Do Our Services Help You Achieve Your Goals? </h4>
              <h6>Allocate More Resources for Marketing and Development:</h6>
              <p>
                By saving a significant portion of your budget, you can reinvest
                the saved funds into marketing your business or developing new
                products.
              </p>
              <h6>Focus on Business Growth:</h6>
              <p>
                Instead of worrying about administrative details, you can focus
                on growth strategies and business expansion.
              </p>

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
