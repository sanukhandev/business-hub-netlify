/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>
                      Baghdad Street, Al Dana area, Abu Dhabi, United Arab
                      Emirates
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@businesshub.abudhabi</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+971 2 6340440</p>
                    <p>+971 508959510</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <Link href="/">
                <div className="logo">
                  <img
                    src={appData.footerLogo}
                    style={{ width: "150px" }}
                    alt=""
                  />
                </div>
              </Link>
              <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100057392223857 ">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/business-hub-international-investment
"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/businesshubi/?igsh=MTJ3ejZneWdmbTM3bQ%3D%3D 
"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2024, 2024 Business HUB international investment - All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
