import React from "react";
import "./Footer.css";
import Linked from "../../Images/linked.png";
import Git from "../../Images/git.png";
export const Footer = () => {
  return (
    <div className="div-container-footer">
      <div className="div-container-elements-footer">
        <div>
          <p className="p-name-footer">Matias Garrido</p>
          <p className="p-service-footer">Web Developer & Designer</p>
        </div>
        <p className="p-reserved-footer">All rights reserved - 2022</p>
        <div className="div-icons-footer">
          <a href="https://www.linkedin.com/in/matias-garridodev/">
            <img className="img-icon-footer" src={Linked} alt="LinkedIn" />
          </a>
          <a href="https://github.com/matiasgarrid0">
            <img className="img-icon-footer" src={Git} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};
