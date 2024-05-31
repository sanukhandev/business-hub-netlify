import React from "react";
import Demos from "./demos/demos";
import Navbar from "../components/Navbar/navbar";
import FullTestimonials from "../components/Full-testimonials/full-testimonials";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import LightTheme from "../layouts/Light";
import Works3 from "../components/Works3/works3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Intro4 from "../components/Intro4/intro4";
import AboutUs3 from "../components/About-us3/about-us3";
import Services3 from "../components/Services3/services3";
import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro4 blackStar />
      <AboutUs3 />
      <MinimalArea2 />
      <Works3 />
      {/* <Services3 /> */}
      {/* <FullTestimonials classText="pb-0" /> */}
      {/* <Team /> */}
      <Blogs4 />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default Home;
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("http://localhost:1337/api/abouts");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }
