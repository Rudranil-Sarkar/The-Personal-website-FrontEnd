import React, { useContext } from "react";
import { pathContext } from "./pathContext";

import "../App.css";

const Prompt = () => {
  const [path, Setpath] = useContext(pathContext);
  return (
    <div className="header">
      <h1>{`~/USER/PORTFOLIO/RUDRANIL${path === "/" ? "" : path}:`}</h1>
    </div>
  );
};

export default Prompt;
