import React, { useEffect } from "react";
import Aos from "aos";
import "./Projects.css";
import projects from "./Project.json";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="div-container-projects" id='projects'>
      <div className="div-container-elements-experience">
        <p className="p-title-experience" data-aos="fade-right">
          PROJECTS
        </p>
        <div className="div-container-projets-cards">
          {projects.map((p) => (
            <div key={p.id} className="div-card-container-project" data-aos="fade-right">
              <img className="img-laptop-project" src={p.img} alt="laptop" />
              <div className="div-text-project">
                <p className="p-title-project">{p.title}</p>
                <p className="p-descritprion-project">{p.description}</p>
                <div className="container-buttons-project">
                  <a href={p.site}><button className="button-visit-project">Visit site</button></a>
                  <a href={p.repository}><button className="button-visit-repository">Repository</button></a>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
