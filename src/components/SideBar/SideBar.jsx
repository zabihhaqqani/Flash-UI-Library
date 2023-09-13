import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "#f02836",
  });
  return (
    <div>
      <div className="sidebar-container">
        <NavLink
          className="sidebar-items"
          style={getActiveStyle}
          to="/installation"
        >
          Installation
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/components/avatar">
          Avatar
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/alert">
          Alert
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/badge">
          Badge
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/button">
          Button
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/card">
          Card
        </NavLink>
        <NavLink
          className="sidebar-items"
          style={getActiveStyle}
          to="/headings"
        >
          Headings
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/text">
          Text
        </NavLink>
        <NavLink className="sidebar-items" style={getActiveStyle} to="/image">
          Image
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
