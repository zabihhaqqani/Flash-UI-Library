import React from "react";

const IconButton = ({ text, icon }) => {
  return (
    <button className="icon-button">
      <i className={`${icon}`}> </i>
       {text}
    </button>
  );
};

export default IconButton;
