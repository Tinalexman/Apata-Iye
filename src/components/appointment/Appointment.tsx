import React from "react";
import Banner from "./Banner";
import Footer from "../reusable/Footer";
import Navbar from "../reusable/Navbar";
import AppointmentForm from "./AppointmentForm";
import Facilities from "../reusable/Facilities";
import Welcome from "./Welcome";

const Appointment = () => {
  return (
    <>
      <Navbar active={-1} />
      <Banner />
      <AppointmentForm />
      <div className="w-full xs:h-14 lg:h-20 bg-background" />
      <Facilities useWhite={true} />
      <Welcome />
      <Footer />
    </>
  );
};

export default Appointment;
