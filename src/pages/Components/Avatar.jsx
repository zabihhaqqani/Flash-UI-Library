import { ImageAvatar } from "../../components/Avatar/Avatar";
import SideBar from "../../components/SideBar/SideBar";
import Pickachu from "../../assets/pikachu.jpeg";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container-main">
        <SideBar />
      </div>
      <div className="avatar-container">
        <h2>Avatar Component</h2>
        <p>The</p>

        <div className="image-avatar-container">
          <ImageAvatar size="2xs" imgName="Picakhu" src={Pickachu} />
          <ImageAvatar size="sm" imgName="Picakhu" src={Pickachu} />
          <ImageAvatar size="lg" imgName="Picakhu" src={Pickachu} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
