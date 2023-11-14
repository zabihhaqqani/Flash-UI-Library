import "./Text.css";
const Text = ({ text, size, color }) => {
  return (
    <p style={{ color: color }} className={`text text-${size}`}>
      {text}
    </p>
  );
};

export default Text;
