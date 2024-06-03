import React from "react";
import blog2Data from "../../data/blog2.json";
import DarkTheme from "../../layouts/Dark";

import Navbar from "../../components/Navbar/navbar";
import BlogListed from "../../components/Blog-list/blog-list";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogListLight = () => {
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
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        className="sub-bg"
        title="DIGITAL MARKETING SOLUTIONS"
        paragraph="We are a marketing company focused on results and real 
        profit. Our goal is to increase your income. At 
        BusinessHub, we create custom cases tailored to your 
        unique business needs. Our services go beyond basic 
        packages, allowing you to create a customized service 
        package that matches your priorities and end goals. 
        Experience the difference with BusinessHub and take your 
        brand to new heights !"
      />
      <BlogListed blogs={blog2Data} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogListLight;
