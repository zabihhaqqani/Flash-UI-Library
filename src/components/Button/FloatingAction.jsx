import React from "react";

const FloatingAction = ({ icon }) => {
  return (
    <button className="floating-button">
      <i className={`${icon} floating-button-icon`}></i>
    </button>
  );
};

export default FloatingAction;
