import React, { useEffect, useContext } from "react";
import { pathContext } from "./pathContext";

import "../App.css";

const Home = () => {
  const [path, Setpath] = useContext(pathContext);
  useEffect(() => {
    Setpath("/");
  });

  const getAscii = () => {
    let ascii = [
      "██████╗ ██╗   ██╗██████╗ ██████╗  █████╗ ███╗   ██╗██╗██╗     ",
      "██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗████╗  ██║██║██║     ",
      "██████╔╝██║   ██║██║  ██║██████╔╝███████║██╔██╗ ██║██║██║     ",
      "██╔══██╗██║   ██║██║  ██║██╔══██╗██╔══██║██║╚██╗██║██║██║     ",
      "██║  ██║╚██████╔╝██████╔╝██║  ██║██║  ██║██║ ╚████║██║███████╗",
      "╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝"
    ].join("\n");

    return ascii;
  };

  return (
    <>
      <div className="t">
        <h1 className="Home-text">::Connected to Portfolio Server ...</h1>
        <h1 className="Home-text" style={{ animationDelay: "0.5s" }}>
          ::Loading directories ...
        </h1>
      </div>
      <div className="ascii-art">
        <pre>
          <code>{getAscii()}</code>
        </pre>
      </div>
      <div className="Home-main-text-container typing">
        <h1 className="Home-main-text" style={{ paddingTop: "3px" }}>
          A self taught developer >
        </h1>
        <h1 className="Home-main-text cursor" style={{ paddingTop: "3px" }}>
          _
        </h1>
      </div>
    </>
  );
};

export default Home;
