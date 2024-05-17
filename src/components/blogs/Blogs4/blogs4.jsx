/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { thumparallax } from "../../../common/thumparallax";
import removeSlashFromPagination from "../../../common/removeSlashpagination";

SwiperCore.use([Navigation, Pagination, Parallax, EffectFade]);

const Blogs4 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
      thumparallax();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className="blog-crv sub-bg">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="stories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              {!load ? (
                <Swiper
                  speed={800}
                  effect="fade"
                  spaceBetween={0}
                  loop={true}
                  parallax={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-img"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/blog img1.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/blog img2.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/blog img3.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
            <div className="col-lg-6 no-padding valign">
              {!load ? (
                <Swiper
                  speed={800}
                  spaceBetween={0}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-content"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Trending</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              01 April 2024
                            </a>
                          </Link>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              Business Hub: Its role in supporting companies in
                              the stages of establishment, development, and...
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                            In a rapidly evolving and competitive business
                            landscape, companies often need specialized support
                            and guidance to meet challenges, exploit
                            opportunities, and achieve sustainable growth.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Trending</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              01 April 2024
                            </a>
                          </Link>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              <a>
                                Business Hub: Empowering Companies through
                                Establishment
                              </a>
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                            n the fast-paced and competitive business landscape,
                            companies often require specialized support and
                            guidance to navigate challenges, capitalize on
                            opportunities, and achieve sustainable growth.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Trending</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              01 April 2024
                            </a>
                          </Link>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              <a>The Importance of Consulting</a>
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                            In today&apos;s fast-paced and competitive business
                            world, seeking advice and guidance from consultants
                            has become increasingly crucial for companies aiming
                            to thrive and succeed.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
          </div>

          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl"
            >
              <i className="fas fa-caret-up"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            >
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
