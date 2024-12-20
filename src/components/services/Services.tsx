import React from "react";
import Banner from "./Banner";
import Navbar from "../reusable/Navbar";
import ReusableServices from "../reusable/Services";
import Schedule from "../reusable/Schedule";
import Footer from "../reusable/Footer";
import Info from "./Info";

const Services = () => {
  return (
    <>
      <Navbar active={2} />
      <Banner />
      <Info />
      <ReusableServices />
      <Schedule />
      <Footer />
    </>
  );
};

export default Services;
