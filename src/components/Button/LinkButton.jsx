import React from "react";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ color, text, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className="button-link"
      style={{ backgroundColor: color }}
      onClick={() => navigate(url)}
    >
      {text}
    </button>
  );
};

export default LinkButton;
