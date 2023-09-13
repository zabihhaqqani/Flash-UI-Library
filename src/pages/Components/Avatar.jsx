import SideBar from "../../components/SideBar/SideBar";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container-main">
        <SideBar />
      </div>
      <div className="avatar-container">
        <h2>Avatar Component</h2>
      </div>
    </div>
  );
};

export default Avatar;
