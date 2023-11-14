import "./AvatarBadge.css";

const AvatarBadge = ({ src, imgName, size, color }) => {
  return (
    <div className={`circular-avatar-badge ${size}`}>
      <img src={src} alt={imgName} className={`img-avatar`} />
      <span
        className={`avatar-badge`}
        style={{ backgroundColor: color }}
      ></span>
    </div>
  );
};

export default AvatarBadge;
