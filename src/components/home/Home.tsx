import React from "react";
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Facilities from "./Facilities";
import Schedule from "./Schedule";
import Footer from "../reusable/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Facilities />
      <Schedule />
      <Footer />
    </>
  );
};

export default Home;
