"use client";

import React, { useRef, useEffect } from "react";
import { Bars } from "react-loading-icons";
import { useFormik } from "formik";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { useSendMail } from "@/src/hooks/mailer";

interface iFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface iData {
  title: string;
  content: string;
  sub?: string;
}

const ContactForm = () => {
  const { loading, sendMail, success } = useSendMail();
  const data: iData[] = [
    {
      title: "Clinic Address",
      content:
        "No 29, Mosalasi Jimoh Road, Kobiti, Abeokuta, Ogun State. P.O Box 1277, Sapon , Abeokuta.",
    },
    {
      title: "Email Us",
      content: "contact@apataiyeclinic.ng",
      sub: "feedback@apataiyeclinic.ng",
    },
    {
      title: "Hotline",
      content: "Phone: 08034229099",
      sub: "Whatsapp: 09033841716",
    },
  ];

  const target = useRef(null);
  const inView = useInView(target, {
    amount: "some",
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: (values) => {
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
    },
    onSubmit: (values) => {
      sendMail({
        body: `You have a new message from ${values.name}. \nEmail: ${values.email} \nPhone: ${values.phone} \nMessage: ${values.message}`,
        from: values.email,
        subject: "New Message",
      });
    },
  });

  useEffect(() => {
    if (!loading && success) {
      resetForm();
    }
  }, [loading, success, resetForm]);

  return (
    <div className="w-full xs:h-auto lg:h-[500px] font-lato bg-background xs:pb-10 lg:pb-0 lg:px-[7rem] xs:px-[5%] lg:relative">
      <div
        ref={target}
        className="xs:w-full lg:w-auto xs:rounded lg:rounded-lg overflow-hidden grid lg:grid-cols-2 xs:grid-cols-1 lg:absolute lg:-top-[180px] lg:left-[7rem] lg:right-[7rem]"
      >
        <motion.div
          animate={{
            x: inView ? "0%" : "-50%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            bounce: 0.6,
          }}
          className="w-full h-full bg-primary flex flex-col lg:gap-7 xs:gap-5 items-start font-lato xs:px-[5%] xs:py-5 lg:py-10 lg:px-20"
        >
          <h2 className="text-white xs:text-sm lg:text-2xl font-semibold">
            Connect With Us
          </h2>
          <p className="lg:text-sm xs:text-[0.7rem] xs:leading-[1rem] text-white text-opacity-90">
            We&apos;re just a message away. Reach out for inquiries, assistance,
            or to learn more about our services—we&apos;re here to help you
            every step of the way.
          </p>
          <div className="w-full flex flex-col gap-7 mt-2">
            {data.map((d, i) => {
              return (
                <div key={i} className="w-full flex gap-4">
                  <div className="lg:size-14 xs:size-10 rounded-full bg-white grid place-content-center">
                    <IoLocationOutline className="text-primary lg:text-[36px] xs:text-[24px]" />
                  </div>
                  <div className="lg:w-[calc(100%-4.5rem)] xs:w-[calc(100%-3.5rem)] flex flex-col">
                    <h2 className="lg:text-lg xs:text-sm text-white font-semibold">
                      {d.title}
                    </h2>
                    <p className="lg:text-sm xs:text-xs text-white text-opacity-80">
                      {d.content}
                    </p>
                    {d.sub && (
                      <p className="lg:text-sm xs:text-xs text-white text-opacity-80">
                        {d.sub}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:mt-5 xs:mt-2 space-y-2">
            <h2 className="text-white lg:text-lg  xs:text-sm font-semibold">
              Get Immediate Care
            </h2>
            <Link
              href={"/book-appointment"}
              className="py-1 border-white text-white hover:bg-white hover:text-primary duration-300 ease-out transition-colors border rounded-xl lg:text-[0.9rem] xs:text-[0.6rem] grid place-content-center lg:w-[150px] xs:w-[150px]"
            >
              START HERE
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: inView ? "0%" : "50%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            bounce: 0.6,
          }}
          className="w-full h-full"
        >
          <form
            className="w-full h-full bg-white flex flex-col gap-6 items-start font-lato xs:px-[5%] xs:py-5 lg:py-10 lg:px-20"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h2 className="text-sh-2 font-semibold lg:text-xl">
              Share Your Inquiry
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
            <button
              className={`bg-primary ${
                loading && "bg-opacity-70 cursor-not-allowed"
              } lg:text-lg xs:text-sm rounded text-white w-full h-10 grid place-content-center font-semibold`}
            >
              {loading ? <Bars width={24} /> : "SUBMIT"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
