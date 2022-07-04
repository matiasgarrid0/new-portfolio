import React from "react";
import Header from "./Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";
export const Home = () => {
  return (
    <div className="div-container-home">
      <div className="div-background-home">
        <Header />
        <div className="div-container-elements-home">
          <div className="container-text-home">
            <p className="p-hello-home">
              Hello<span className="span-hello-home">!</span>
            </p>
            <p className="p-text-home">
              I am a Jr Full stack developer from Argentina with
              experience in Front-End. Here you can see my projects, expirience,
              skills and contactme
            </p>
          </div>
          <div className="container-buttons-home">
            <button className="button-home-projects">
              Projects <MdKeyboardArrowRight />
            </button>
            <button className="button-home-hire">
              I'm looking to hire <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
