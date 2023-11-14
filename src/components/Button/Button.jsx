import "./Button.css";

const Button = ({ type,text }) => {
  return <button className={`button btn-${type}`}>{text}</button>;
};

export default Button;
