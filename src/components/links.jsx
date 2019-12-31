import React from "react";

import Linkt from "./linkt";

const Links = () => {
  return (
    <div className="links">
      <Linkt Name="./" link="/" />
      <Linkt Name="./projects" link="/projects" />
      <Linkt Name="./about" link="/about" />
      <Linkt Name="./contact_me" link="/contact" />
    </div>
  );
};

export default Links;
