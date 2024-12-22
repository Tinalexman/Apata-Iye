import React from "react";
import Navbar from "../reusable/Navbar";
import Banner from "./Banner";
import Footer from "../reusable/Footer";
import Welcome from "./Welcome";
import ApataMap from "./ApataMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar active={3} />
      <Banner />
      <ContactForm />
      <ApataMap latitude={7.145244} longitude={3.327695} />
      <Welcome />
      <Footer />
    </>
  );
};

export default Contact;
