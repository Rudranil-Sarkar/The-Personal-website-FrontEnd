import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { pathContext } from "./pathContext";

const Linkt = ({ Name, link }) => {
  const [path, Setpath] = useContext(pathContext);

  const getStyle = () => {
    if (`.${path}` === `${Name}`) return "each-link-container-alter";
    return "each-link-container";
  };

  return (
    <>
      <div className="space"></div>
      <div className={getStyle()}>
        <Link to={link} className="anchor">
          <p className="anchor-text">{Name}</p>
        </Link>
      </div>
    </>
  );
};

export default Linkt;
