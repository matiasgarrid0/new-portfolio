import React from "react";
import Header from "./Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";
export const Home = () => {
  return (
    <div className="div-container-home" id="hello">
      <div className="div-background-home">
        <Header />
        <div className="div-container-elements-home">
          <div className="container-text-home">
            <p className="p-hello-home">
              Hello<span className="span-hello-home">!</span>
            </p>
            <p className="p-text-home">
              I am a Jr Full stack developer from Argentina with experience in
              Front-End. Here you can see my projects, expirience, skills and
              contactme
            </p>
          </div>
          <div className="container-buttons-home">
            <a style={{textDecoration: 'none'}} href="https://github.com/matiasgarrid0">
              <button className="button-home-projects">
                Projects <MdKeyboardArrowRight />
              </button>
            </a>
            <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/matias-garridodev/">
              <button className="button-home-hire">
                I'm looking to hire <MdKeyboardArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
