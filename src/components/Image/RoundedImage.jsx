import React from "react";

const RoundedImage = ({ imgSrc, name }) => {
  return (
    <div className="rounded-image-container">
      <img className="rounded-image" src={imgSrc} alt={name} />
    </div>
  );
};

export default RoundedImage;
