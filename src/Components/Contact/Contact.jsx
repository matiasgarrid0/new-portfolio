import React, { useEffect, useState } from "react";
import "./Contact.css";
import Aos from "aos";
import Cont from "../../Images/contact.png";
import { TextField, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [forms, setForm] = useState({
    user_email: "",
    user_name: "",
    message: "",
    subject: "",
  });
  const { user_email, user_name, message, subject } = forms;


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user_email || !user_name || !message) {
      toast.error("Please complete each field");
    } else {
      emailjs.sendForm(
        "service_b7d2niz",
        "template_wnaxl8n",
        e.target,
        "aAGZij1MXePtV_tKe"
      );
      try {
        toast.success("Email sent successfully");
        setForm({
          user_email: "",
          user_name: "",
          message: "",
          subject: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleInputChange = (e) => {
    setForm({ ...forms, [e.target.name]: e.target.value });
    if (message.length >= 399) {
      toast.error("Max of 400 caracters");
    }
  };

  return (
    <div className="div-container-contact" id='contact'>
      <div className="div-container-elements-experience">
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
        <p className="p-title-experience" data-aos="fade-right">
          CONTACT ME
        </p>
        <div className="div-container-elemnts-contact" data-aos="fade-up">
          <div className="container-img-div-contact">
            <div>
              <p className="title-text-contact">Let's Talk.</p>
              <p className="text-contact">
                Let me know who you are and what are you looking for.
              </p>
            </div>
            <img className="img-contact" src={Cont} alt="" />
          </div>
          <div className="div-card-contact">
            <form onSubmit={(e) => handleSubmit(e)} id="contactForm">
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "-10px",
                }}
                className="box-contact"
              >
                <div className="container-2-inputs">
                  <div style={{ width: "500px" }}>
                    <TextField
                      variant="standard"
                      type="email"
                      label="Email"
                      fullWidth
                      size="small"
                      required
                      name="user_email"
                      value={user_email}
                      onChange={(e) => handleInputChange(e)}
                      inputProps={{ maxLength: 60 }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px", width: "500px" }}>
                    <TextField
                      variant="standard"
                      type="text"
                      label="Name"
                      fullWidth
                      size="small"
                      required
                      name="user_name"
                      value={user_name}
                      onChange={(e) => handleInputChange(e)}
                      inputProps={{ maxLength: 60 }}
                    />
                  </div>
                </div>
                <TextField
                  variant="standard"
                  type="text"
                  label="Subject"
                  fullWidth
                  size="small"
                  name="subject"
                  value={subject}
                  onChange={(e) => handleInputChange(e)}
                  inputProps={{ maxLength: 60 }}
                />
                <TextField
                  variant="standard"
                  type="text"
                  label="Message"
                  fullWidth
                  multiline
                  required
                  maxRows={5}
                  minRows={5}
                  name="message"
                  value={message}
                  onChange={(e) => handleInputChange(e)}
                  inputProps={{ maxLength: 400 }}
                />
                <div className="container-button-form">
                  <input
                    className="button-form-contact"
                    type="submit"
                    value="Send"
                  />
                </div>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
