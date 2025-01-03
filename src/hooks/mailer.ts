//ts-ignore

import axios from "axios";

import { useState } from "react";
import toast from "react-hot-toast";

interface iMailData {
  to?: string;
  from: string;
  subject: string;
  body: string;
  config?: {
    host: string;
    port: number;
    username: string;
    password: string;
  };
}

export const useSendMail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const sendMail = async (data: iMailData) => {
    if (loading) return;
    setLoading(true);

    data.to = "contact@apataiyeclinic.ng";
    data.from = `${data.from}`;
    data.config = {
      host: "wghp2.wghservers.com",
      port: 465,
      username: "no-reply@apataiyeclinic.ng",
      password: "E50vnhXbu_j=",
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    try {
      await axios.post("https://mailer-xg4d.onrender.com/api/email", data);
      toast.success("Your message has been delivered successfully.");
      setSuccess(true);
    } catch (error: any) {
      toast.error(
        `${
          error?.response?.data?.message ??
          "An error occurred. Please try again later"
        }`
      );
    }
    setLoading(false);
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return { loading, sendMail, success };
};
