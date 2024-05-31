import React from "react";
import featuresData2 from "../../data/sections/features.json";
import featuresData1 from "../../data/sections/features1.json";
import featuresData3 from "../../data/sections/features2.json";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
                We are a new business establishment service agency
              </h3>
            </div>
          </div>
        </div>
        {/* <h4 className="wow color-font">
          Marketing and administrative services
        </h4> */}
        <div className="row">
          {featuresData1.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <img src={item.icon} />
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {featuresData2.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <img src={item.icon} />
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <h4 className="wow color-font mt-3">Consulting services</h4> */}
        <div className="row">
          {featuresData3.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <img src={item.icon} />
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
