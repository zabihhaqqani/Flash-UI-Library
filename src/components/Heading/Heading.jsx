import React from "react";
import "./Heading.css"

const Heading = ({ text, type }) => {
  const validLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const chosenLevel = validLevels.includes(type) ? type : "h1";

  return React.createElement(chosenLevel, null, text);
};

export default Heading;
