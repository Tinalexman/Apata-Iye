"use client";

import React from "react";
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import Services from "../reusable/Services";
import About from "./About";
import Testimonials from "../reusable/Testimonials";
import Facilities from "../reusable/Facilities";
import Schedule from "../reusable/Schedule";
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
