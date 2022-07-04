import React, { useEffect, useState } from "react";
import "./Contact.css";
import Aos from "aos";
import Cont from "../../Images/contact.png";
import { TextField, Box } from "@mui/material";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="div-container-contact">
      <div className="div-container-elements-experience">
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
                  />
                </div>
              </div>
              <TextField
                variant="standard"
                type="text"
                label="Subject"
                fullWidth
                size="small"
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
              />
              <div className="container-button-form">
                <button className="button-form-contact">Send</button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
