import React, { useState, useEffect, useContext } from "react";

import { pathContext } from "./pathContext";
import "../App.css";

const Loading = () => {
  return (
    <>
      <div className="Loading">
        <div
          className="t"
          style={{ display: "inherit", alignItems: "flex-end" }}
        >
          <h2>Loading</h2>
          <h1>...</h1>
        </div>
      </div>
    </>
  );
};

const EachProject = ({ prj }) => {
  return (
    <>
      <div className="each-project">
        <a
          href={prj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <p>
            {prj.name} <br />
            <br />
            <sub>{prj.description}</sub>
          </p>
        </a>
      </div>
    </>
  );
};

const Project = () => {
  const [path, Setpath] = useContext(pathContext);
  const [loading, Setloading] = useState(true);
  const [projects, Setprojects] = useState([]);

  const fetchProjects = () => {
    Setloading(true);
    fetch("/api/getdata/")
      .then(res => {
        return res.json();
      })
      .then(json => {
        Setloading(false);
        Setprojects(json);
      });
  };

  useEffect(() => {
    Setpath("/projects");
  });

  useEffect(() => {
    fetchProjects();
  }, []);
  const getAscii = () => {
    let ascii = [
      "██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗",
      "██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝",
      "██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗",
      "██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║",
      "██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║",
      "╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝"
    ].join("\n");

    return ascii;
  };
  return (
    <>
      <div className="contact-container">
        <div className="t">
          <h1 className="about-text">::wget localhost/projects</h1>
        </div>
        <div className="ascii-art-top">
          <pre>
            <code>{getAscii()}</code>
          </pre>
        </div>
        <div className="contact-page-para">
          <p>
            #These are my software repositries on github and other projects I
            have worked on
            <br />
            <br />
            <sub>## The contents are updated every 10 minutes</sub>
            <br />
            <br />
          </p>
        </div>
        <div className="projects-window">
          {loading ? (
            <Loading />
          ) : (
            projects.map(p => {
              return <EachProject key={p.id} prj={p} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
