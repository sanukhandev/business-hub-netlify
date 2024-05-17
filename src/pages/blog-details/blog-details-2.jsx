import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetailsTwo = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        title="Blogs."
        paragraph="All the most current news and events of our creative team."
      />
      <section className="blog-pg single section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="img">
                  <img src="/img/blog/blog img2.webp" alt="" />
                </div>
                <div className="content pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">
                          Business Hub: Empowering Companies through
                          Establishment
                        </h4>
                        <div className="spacial">
                          <p>
                            In the fast-paced and competitive business
                            landscape, companies often require specialized
                            support and guidance to navigate challenges,
                            capitalize on opportunities, and achieve sustainable
                            growth. This is where Business Hub emerges as a
                            pivotal ally for businesses, offering comprehensive
                            services aimed at assisting companies in their
                            establishment, development, and management
                            endeavors. In this article, we delve into the role
                            of Business Hub and how it empowers companies
                            throughout their journey.
                          </p>
                        </div>
                        <h6> Establishment Support:</h6>
                        <p>
                          Business Hub provides invaluable assistance to
                          companies during their establishment phase. Whether
                          it&apos;s navigating legal requirements, structuring
                          the business entity, or preparing essential
                          documentation, Business Hub offers tailored guidance
                          to ensure a smooth and compliant setup process. By
                          leveraging its expertise and network, Business Hub
                          helps companies establish a strong foundation for
                          their operations.
                        </p>

                        <h6> Development Services:</h6>

                        <p>
                          Beyond establishment, Business Hub offers a range of
                          development services aimed at fostering growth and
                          innovation within companies. This includes market
                          analysis, strategic planning, technology integration,
                          and more. By identifying market trends, exploring
                          growth opportunities, and implementing strategic
                          initiatives, Business Hub assists companies in
                          optimizing their performance and unlocking their full
                          potential.
                        </p>
                        <h6>Management solutions:</h6>
                        <p>
                          Business Hub is a strategic partner in managing
                          various aspects of the company&apos;s operations. From
                          finance and administrative management to human
                          resources and marketing, Business Hub offers
                          customized solutions to streamline operations, enhance
                          efficiency, and achieve organizational success.
                          Through its expertise in management and industry best
                          practices, Business Hub enables companies to focus on
                          their core missions while ensuring operational
                          excellence.
                        </p>
                        <h6> Access to resources and networks:</h6>
                        <p>
                          One of the main advantages of partnering with Business
                          Hub is access to a wide network of resources and
                          relationships. Whether it&apos;s obtaining financing,
                          forming strategic partnerships, or tapping into
                          industry expertise, Business Hub provides companies
                          with the resources they need to succeed in a
                          competitive environment. By leveraging its extensive
                          network, Business Hub helps companies overcome
                          obstacles and exploit growth opportunities.
                        </p>
                        <h6> Ongoing Support and Guidance:</h6>
                        <p>
                          Business Hub provides ongoing support and guidance to
                          companies at every stage of their journey. Whether
                          it&apos;s adapting to changes in the market, expanding
                          into new markets, or dealing with regulatory
                          complexities, Business Hub provides ongoing support to
                          ensure companies remain empowered and able to achieve
                          long-term success. Through active monitoring and
                          strategic advice, Business Hub helps companies excel
                          and achieve long-term success.
                        </p>
                        <p>
                          In essence, Business Hub plays a vital role in
                          empowering companies through establishment,
                          development, and management phases. By offering
                          comprehensive support, strategic guidance, and access
                          to valuable resources, Business Hub enables companies
                          to navigate challenges, capitalize on opportunities,
                          and achieve sustainable growth in an ever-evolving
                          business landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="pagination">
                  <span>
                    <a href="#0">Prev Post</a>
                  </span>
                  <span className="icon">
                    <Link href={`/blog/blog-dark`}>
                      <a>
                        <i className="fas fa-th-large"></i>
                      </a>
                    </Link>
                  </span>
                  <span className="text-right">
                    <a href="#0">Next Post</a>
                  </span>
                </div> */}
                <div className="comment-form" id="comment-form">
                  <h5>Add Comment :</h5>
                  <div className="form">
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        comment: "",
                      }}
                      onSubmit={async (values) => {
                        await sendMessage(500);
                        alert(JSON.stringify(values, null, 2));
                        // Reset the values
                        values.name = "";
                        values.email = "";
                        values.comment = "";
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <Field
                                  as="textarea"
                                  placeholder="Your Comment"
                                  name="comment"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <Field
                                  type="text"
                                  placeholder="Your Name"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <Field
                                  type="email"
                                  validate={validateEmail}
                                  placeholder="Your Email"
                                  name="email"
                                />
                                {errors.email && touched.email && (
                                  <div>{errors.email}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group text-center">
                                <button
                                  type="submit"
                                  className=" butn bord curve full-width"
                                >
                                  Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsTwo;
