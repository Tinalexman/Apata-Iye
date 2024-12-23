import axios from "axios";

export interface iMailData {
  to: string;
  from: "Apata Iye <thetravelller2002@gmail.com>";
  subject: string;
  body: string;
  config?: {
    host: string;
    port: number;
    username: string;
    password: string;
  };
}

export const bookAppointment = async (data: iMailData) => {
  data.config = {
    host: "smtp.gmail.com",
    port: 587,
    username: "thetravelller2002@gmail.com",
    password: "nqkzgyebafvmuxkd",
  };
  try {
    const response = await axios.post(
      "https://mailer-xg4d.onrender.com/api/email",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
