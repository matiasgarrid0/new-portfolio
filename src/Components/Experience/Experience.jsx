import React, { useEffect } from "react";
import Aos from "aos";
import "./Experience.css";
import Lindo from "../../Images/lindosoft.jpg";
import SJ from "../../Images/sanjorge1.png";

export const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="div-container-experience">
      <div className="div-container-elements-experience">
        <p data-aos="fade-up" className="p-title-experience">
          EXPERIENCE
        </p>
        <div className="div-container-cards-experience">
          <div className="div-card-experience" data-aos="fade-right">
            <div className="container-elemnts-card-experience">
              <img className="img-card-experience" src={SJ} alt="sj" />
              <div>
                <p className="tilte-experience">Automóviles San Jorge</p>
                <p>
                  <span span className="p-roll-experience">Roll:</span> Front-End developer
                </p>
              </div>
            </div>
          </div>
          <div className="div-card-experience" data-aos="fade-left">
            <div className="container-elemnts-card-experience">
              <img className="img-card-experience" src={Lindo} alt="lindosoft"  />
              <div>
                <p className="tilte-experience">Lindo.la Software</p>
                <p>
                  <span className="p-roll-experience">Roll:</span> Front-End developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
