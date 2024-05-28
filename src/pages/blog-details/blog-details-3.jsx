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

const BlogDetailsThird = () => {
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
        title="Blogs"
        paragraph="All the most current news and events of our creative team"
      />
      <section className="blog-pg single section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="img">
                  <img src="/img/blog/blog img3.webp" alt="" />
                </div>
                <div className="content pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">
                          The Importance of Consulting:
                        </h4>
                        <div className="spacial">
                          <p>
                            In today&apos;s fast-paced and competitive business
                            world, seeking advice and guidance from consultants
                            has become increasingly crucial for companies aiming
                            to thrive and succeed. Consulting services offer
                            invaluable expertise, insights, and strategies that
                            can help businesses navigate challenges, capitalize
                            on opportunities, and achieve their goals
                            effectively. In this article, we explore the
                            importance of consulting and why it plays a pivotal
                            role in the success of modern enterprises.
                          </p>
                        </div>
                        <h6> 1. Specialized Knowledge and Expertise:</h6>
                        <p>
                          Consultants bring specialized knowledge and expertise
                          in various fields, including management, finance,
                          marketing, technology, and more. Their diverse
                          backgrounds and experiences enable them to offer
                          unique perspectives and innovative solutions to
                          complex business problems.
                        </p>
                        <h6> 2. Objective Assessment and Analysis:</h6>
                        <p>
                          Consulting involves conducting objective assessments
                          and analysis of a company&apos;s operations,
                          strategies, and performance. Consultants use proven
                          methodologies and tools to identify strengths,
                          weaknesses, opportunities, and threats, providing
                          businesses with valuable insights for improvement and
                          growth.
                        </p>
                        <h6>3. Strategic Planning and Decision-Making:</h6>
                        <p>
                          Consultants assist businesses in strategic planning
                          and decision-making processes. By leveraging their
                          industry knowledge and market insights, consultants
                          help companies develop robust strategies, set clear
                          objectives, and make informed decisions that align
                          with their long-term vision and objectives.
                        </p>
                        <h6>4. Problem Solving and Innovation:</h6>
                        <p>
                          Consulting fosters problem-solving and innovation
                          within organizations. Consultants help businesses
                          identify challenges, explore alternative solutions,
                          and implement innovative approaches to overcome
                          obstacles and drive positive change.
                        </p>
                        <h6> 5. Change Management and Transformation:</h6>
                        <p>
                          In an ever-evolving business landscape, consultants
                          play a critical role in change management and
                          transformation initiatives. They support companies in
                          adapting to market shifts, technological advancements,
                          and organizational changes, ensuring smooth
                          transitions and sustainable growth.
                        </p>
                        <h6>6. Enhancing Efficiency and Productivity:</h6>
                        <p>
                          Consulting services aim to enhance efficiency and
                          productivity across all aspects of business
                          operations. Consultants streamline processes, optimize
                          workflows, and implement best practices to maximize
                          resource utilization and minimize costs.
                        </p>
                        <h6>7. Market Insights and Competitive Advantage: </h6>
                        <p>
                          Consultants provide valuable market insights and
                          competitive intelligence that enable businesses to
                          stay ahead of the curve. By analyzing market trends,
                          consumer behavior, and competitor strategies,
                          consultants help companies identify opportunities for
                          differentiation and gain a competitive advantage.
                        </p>
                        <h6>8. Training and Development:</h6>
                        <p>
                          Consulting often includes training and development
                          programs tailored to the specific needs of the
                          organization. Consultants offer workshops, seminars,
                          and coaching sessions to empower employees, enhance
                          their skills, and foster a culture of continuous
                          learning and improvement.
                        </p>
                        <p>
                          In conclusion, consulting is indispensable for
                          businesses seeking sustainable growth, innovation, and
                          success in today&apos;s dynamic business environment.
                          By leveraging the expertise of consultants, companies
                          can address challenges, seize opportunities, and
                          achieve their strategic objectives effectively.
                          Whether it&apos;s strategic planning, problem-solving,
                          change management, or market analysis, consulting
                          services play a vital role in driving business
                          excellence and resilience.
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
                                  className="butn bord  curve full-width"
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

export default BlogDetailsThird;
