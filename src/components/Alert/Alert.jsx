import "./Alert.css";

export const Alert = ({ type, message }) => {
  let alert = "";
  if (type === "success") {
    alert = <i className="fas fa-check-circle"></i>;
  } else if (type === "warning") {
    alert = <i className="fas fa-exclamation-triangle"></i>;
  } else if (type === "info") {
    alert = <i className="fas fa-info-circle"></i>;
  } else if (type === "error"){
    alert = <i class="fas fa-times"></i>
  }

  return (
    <div className={`alert ${type}`}>
      {alert} {message}
    </div>
  );
};
