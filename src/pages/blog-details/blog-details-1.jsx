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

const BlogDetailsOne = () => {
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
                  <img src="/img/blog/blog img1.webp" alt="" />
                </div>
                <div className="content pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">
                          Business Hub: Its role in supporting companies in the
                          stages of establishment, development, and...
                        </h4>
                        <div className="spacial">
                          <p>
                            In a rapidly evolving and competitive business
                            landscape, companies often need specialized support
                            and guidance to meet challenges, exploit
                            opportunities, and achieve sustainable growth. Here
                            comes the role of Business Hub as an essential ally
                            for companies, as it provides comprehensive services
                            aimed at assisting companies in the stages of
                            establishment, development, and management. In this
                            article, we'll look at the role of Business Hub and
                            how it empowers businesses throughout their journey.
                          </p>
                        </div>
                        <h6> Support in the establishment phase:</h6>
                        <p>
                          Business Hub provides valuable support to companies
                          during the establishment phase. Whether it is legal
                          organization, structuring a legal entity, or preparing
                          key documents, Business Hub provides customized
                          guidance to ensure a smooth and compliant onboarding
                          process. Leveraging its expertise and network,
                          Business Hub helps companies build a strong base for
                          their operations.
                        </p>

                        <h6> Development Services:</h6>

                        <p>
                          After incorporation, Business Hub offers a range of
                          development services aimed at promoting growth and
                          innovation within companies. This includes market
                          analysis, strategic planning, technology integration,
                          and more. By identifying market trends, exploring
                          opportunities, and implementing strategic initiatives,
                          Business Hub helps companies improve their performance
                          and fully exploit their potential.
                        </p>
                        <h6>Management solutions:</h6>
                        <p>
                          Business Hub is a strategic partner in managing
                          various aspects of the company's operations. From
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
                          relationships. Whether it's obtaining financing,
                          forming strategic partnerships, or tapping into
                          industry expertise, Business Hub provides companies
                          with the resources they need to succeed in a
                          competitive environment. By leveraging its extensive
                          network, Business Hub helps companies overcome
                          obstacles and exploit growth opportunities.
                        </p>
                        <h6> Continuous support and guidance:</h6>
                        <p>
                          {" "}
                          Business Hub provides ongoing support and guidance to
                          companies at every stage of their journey. Whether
                          it's adapting to changes in the market, expanding into
                          new markets, or dealing with regulatory complexities,
                          Business Hub provides ongoing support to ensure
                          companies remain empowered and able to achieve
                          long-term success. Through active monitoring and
                          strategic advice, Business Hub helps companies excel
                          and achieve long-term success.
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
                                  className=" butn bord  curve full-width"
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

export default BlogDetailsOne;
