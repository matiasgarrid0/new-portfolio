import React from "react";
import "./Home.css";
import { Drawer } from "./Drawer";
import { useScrollPosition } from "../../customHooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        scrollPosition > 535
          ? "div-container-header-scroll"
          : "div-container-header-transparent"
      }
    >
      <div className="div-container-elements-header">
        <div
          className={
            scrollPosition > 535
              ? "div-container-brand-header-scroll"
              : "div-container-brand-header"
          }
        >
          <a href="#hello" style={{ textDecoration: "none" }}>
            <p className="p-title-name-header">Matias Garrido</p>
          </a>
          <p className="p-title-service-header">Web Developer & Designer</p>
        </div>
        <div
          className={
            scrollPosition > 535
              ? "div-container-menu-header"
              : "div-container-menu-header-scroll"
          }
        >
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT ME</a>
        </div>
        <div className="div-container-drawer-header">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
