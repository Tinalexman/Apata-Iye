import React from "react";
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import Testimonials from "../reusable/Testimonials";
import Schedule from "../reusable/Schedule";
import Footer from "../reusable/Footer";
import Info from "./Info";
import MV from "./MV";

const About = () => {
  return (
    <>
      <Navbar active={1} />
      <Banner />
      <MV />
      <Info />
      <Testimonials />
      <Schedule />
      <Footer />
    </>
  );
};

export default About;
