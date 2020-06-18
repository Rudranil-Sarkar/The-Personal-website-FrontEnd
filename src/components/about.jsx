import React, { useEffect, useContext } from "react";
import { pathContext } from "./pathContext";

import "../App.css";

const About = () => {
  const [path, Setpath] = useContext(pathContext);
  useEffect(() => {
    Setpath("/about");
  });

  const getAscii = () => {
    let ascii = [
      " █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ███╗   ███╗███████╗",
      "██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ████╗ ████║██╔════╝",
      "███████║██████╔╝██║   ██║██║   ██║   ██║       ██╔████╔██║█████╗  ",
      "██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ██║╚██╔╝██║██╔══╝  ",
      "██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ██║ ╚═╝ ██║███████╗",
      "╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ╚═╝     ╚═╝╚══════╝"
    ].join("\n");

    return ascii;
  };

  return (
    <div className="about-main-container">
      <div className="t">
        <h1 className="about-text">::whoami</h1>
      </div>
      <div className="ascii-art-top">
        <pre>
          <code>{getAscii()}</code>
        </pre>
      </div>
      <div className="about-content-container">
        <div className="about-page-para">
          <p>
            /* Hello! I am a self-taught programmer,
            <br />
            <br /> I was never the best academically in school but
            <br /> my awfully curious nature kept me going,
            <br />
            <br /> I love to solve problems and learn new things by practically
            using them. <br />
            <br /> I have genuine passion for programming. <br />
            <br /> Also I love retro computers, old technologies very much */
          </p>
        </div>
        <div>
          <div>
            <h1 className="skill-text">Skills that I possess</h1>
          </div>
          <ul className="skill-list">
            <li>C/C++</li>
            <li>REACTJS</li>
            <li>NODE-JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS/SASS</li>
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>PYTHON</li>
            <li>LINUX/SYSTEM ADMINISTRATION</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            clear: "left",
            float: "none"
          }}
        >
          <div className="t" style={{ paddingRight: "10px" }}>
            <h1 className="Home-text">...</h1>
          </div>
          <h1 className="Home-main-text cursor">_</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
