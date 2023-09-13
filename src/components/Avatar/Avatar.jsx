import "./Avatar.css";

export const ImageAvatar = ({ size, imgName, src }) => {
  return (
    <div className={`circular-avatar-${size}`}>
      <img src={src} alt={imgName} className={`img-avatar`} />
    </div>
  );
};
