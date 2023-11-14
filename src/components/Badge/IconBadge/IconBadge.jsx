import React from "react";
import "./IconBadge.css";

const IconBadge = ({ icon, number }) => {
  return (
    <div className="icon-badge">
      <i className={`${icon} icon`}></i>
      <span className="badge">{number}</span>
    </div>
  );
};

export default IconBadge;
