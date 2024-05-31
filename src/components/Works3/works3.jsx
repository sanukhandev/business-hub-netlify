/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import worksData from "../../data/sections/works.json";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import Slider from "react-slick";

const Works3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section className="work-carousel2 metro section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h3 className="wow fadeIn color-font mb-4" data-wow-delay=".5s">
                  Our Clients
                </h3>
                <h6 className="wow ">
                  Our area of practice is quite wide: design, graphics,
                  branding, development.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <div className="content">
                        <div className="img ">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/Al Huqooq.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img border border-dark">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/albayt.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/althawani.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/bring it in.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/elite.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/hallyu style.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/irish pub.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/kids palace.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/mabrooka.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/masa.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/patterns.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/persona.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/planthead.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/purebliss.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/rba.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/solis.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/trident.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/vibra.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img src="/img/customers/wadi doan.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img
                              src="/img/customers/wonder delights.png"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="content">
                        <div className="img">
                          <span className="imgio">
                            <span
                              className="wow cimgio"
                              data-delay="500"
                            ></span>
                            <img
                              src="/img/customers/wrapped in silk.png"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works3;
