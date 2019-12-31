import React, { useState, createContext } from "react";

export const pathContext = createContext();

export const PathProvider = props => {
  const [path, Setpath] = useState("");

  return (
    <pathContext.Provider value={[path, Setpath]}>
      {props.children}
    </pathContext.Provider>
  );
};
