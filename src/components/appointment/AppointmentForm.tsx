"use client";

import React from "react";

// import { motion } from "framer-motion";
import { Formik, Form } from "formik";

import Image from "next/image";
import I1 from "@/public/app_1.jpg";

import I4 from "@/public/app_4.jpg";
import I5 from "@/public/app_5.jpg";
import I6 from "@/public/app_6.jpg";

interface iFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const AppointmentForm = () => {
  return (
    <div className="w-full lg:py-20 lg:px-[7rem] xs:px-[5%] xs:py-10 bg-primary">
      <div className="w-full bg-white rounded xs:px-0 lg:px-20 lg:py-10 grid xs:grid-cols-1 lg:grid-cols-2 lg:gap-20 xs:gap-5">
        <div className="xs:px-2.5 xs:my-5 lg:my-0 lg:px-0 relative w-full h-full">
          <div className="xs:w-full lg:w-[70%] lg:h-[80%] bg-secondary rounded-r-2xl rounded-l-lg" />
          <div className="lg:h-[80%] lg:w-[95%] xs:w-full xs:static lg:absolute lg:left-5 lg:top-5 rounded-md overflow-hidden pr-0.5 bg-secondary">
            <Image src={I1} alt="doctor" className="w-full" />
          </div>

          <div className="w-full grid grid-cols-3 absolute bottom-0 left-0 right-0 px-5">
            {[I4, I5, I6].map((im, i) => (
              <Image
                key={i}
                src={im}
                alt="appointment"
                className="w-full xs:h-[5rem] lg:h-[8rem] object-cover"
              />
            ))}
          </div>
        </div>
        <Formik<iFormValues>
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          validate={(values) => {
            const errors: Partial<iFormValues> = {};
            if (!values.name) {
              errors.name = "Name is required";
            }

            if (!values.email) {
              errors.email = "Email is required";
            }

            if (!values.phone) {
              errors.phone = "Phone number is required";
            }

            if (!values.message) {
              errors.message = "Message is required";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <Form
              className="w-full flex flex-col gap-6 items-center font-lato xs:px-[5%] xs:py-5 lg:py-0 lg:px-0"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h2 className="text-sh-2 font-semibold lg:text-xl">
                Schedule Your Consultation
              </h2>
              <div className="flex flex-col items-start w-full gap-2">
                <div className="space-y-1 w-full">
                  <h6 className="xs:text-xs lg:text-sm text-sh-3 ">
                    Name: <span className="text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-[#868181] border rounded p-2 focus:outline-none xs:text-sm lg:text-lg placeholder:text-[#A1A1A1] text-sh-2"
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 ">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1 w-full">
                  <h6 className="xs:text-xs lg:text-sm text-sh-3 ">
                    Email Address: <span className="text-red-500">*</span>
                  </h6>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-[#868181] border rounded p-2 focus:outline-none xs:text-sm lg:text-lg placeholder:text-[#A1A1A1] text-sh-2"
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 ">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1 w-full">
                  <h6 className="lg:text-sm xs:text-xs text-sh-3 ">
                    Phone Number: <span className="text-red-500">*</span>
                  </h6>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-[#868181] border rounded p-2 focus:outline-none xs:text-sm lg:text-lg placeholder:text-[#A1A1A1] text-sh-2"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-red-500 ">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-1 w-full">
                  <h6 className="lg:text-sm xs:text-xs text-sh-3">
                    Message: <span className="text-red-500">*</span>
                  </h6>
                  <textarea
                    name="message"
                    placeholder="Type your message here..."
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-[#868181] resize-none border xs:text-sm lg:text-lg rounded p-2 lg:h-32 xs:h-24 focus:outline-none placeholder:text-[#A1A1A1] text-sh-2"
                  />
                  {errors.message && touched.message && (
                    <p className="text-xs text-red-500 ">{errors.message}</p>
                  )}
                </div>
              </div>
              <button className="bg-primary lg:text-lg xs:text-sm rounded text-white w-full h-10 grid place-content-center font-semibold">
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AppointmentForm;
