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

const BlogDetailsFour = () => {
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
                <div className="content pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">
                          The importance of consulting in practical success
                        </h4>
                        <div className="spacial">
                          <p>
                            When we talk about the business world, consulting
                            plays a crucial role in the success and continuity
                            of companies. Here are some points that highlight
                            the importance of consultations in this context:
                          </p>
                        </div>
                        <h6> 1. Strategic expertise :</h6>
                        <p>
                          Consulting provides companies with the possibility of
                          benefiting from external strategic expertise. Through
                          experienced consultants, companies can access
                          strategic insights and guidance that help them better
                          achieve their goals.
                        </p>
                        <h6>2. Multiple specializations :</h6>
                        <p>
                          Consulting firms can provide a wide range of services
                          and specializations, including management consulting,
                          marketing, technology, and others. This allows
                          companies to benefit from multiple expertise to meet
                          their different needs.
                        </p>
                        <h6>3. Reduce costs and increase efficiency : </h6>
                        <p>
                          Instead of hiring in-house staff to provide specific
                          services, companies can hire the services of
                          consultants as needed. This reduces fixed costs and
                          allows for greater efficiency in the use of resources.
                        </p>
                        <h6>4. New insights and exchange of ideas :</h6>
                        <p>
                          Consultants can provide new insights and different
                          perspectives to companies, helping them solve problems
                          and achieve success. Interaction with consultants can
                          also contribute to exchanging ideas and stimulating
                          the creativity process within the company.
                        </p>
                        <h6>5. Technical modernization and innovation :</h6>
                        <p>
                          In the era of rapidly developing technology, companies
                          can benefit from the expertise of consultants in
                          adopting new technology and applying the latest
                          innovations in their field of work.
                        </p>
                        <h6>6. Dealing with challenges and changes : </h6>
                        <p>
                          The business world lives in a time full of challenges
                          and rapid changes. Consulting provides companies with
                          the ability to adapt to these challenges and make the
                          right decisions under changing circumstances.
                        </p>
                        <h6>7. Developing skills and abilities :</h6>
                        <p>
                          {" "}
                          By collaborating with professional consultants,
                          employees within the company can develop their skills
                          and abilities, which helps them grow personally and
                          professionally.
                        </p>{" "}
                      </div>
                      <p>
                        In short, it can be said that consulting represents an
                        integral part of a successful business strategy, as it
                        contributes to providing the expertise and insights
                        necessary to meet challenges and achieve success in the
                        rapidly changing business environment.
                      </p>
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

export default BlogDetailsFour;
