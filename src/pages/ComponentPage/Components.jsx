import { NavLink } from "react-router-dom";
import "./Components.css";

const Components = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "#f02836",
  });
  return (
    <div>
      <h2 className="heading-components">All Components</h2>
      <div className="components-container">
        {/* <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/installation"
        >
          Installation
        </NavLink> */}
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/avatar"
        >
          Avatar
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/alert"
        >
          Alert
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/badge"
        >
          Badge
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/button"
        >
          Button
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/card"
        >
          Card
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/headings"
        >
          Headings
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/text"
        >
          Text
        </NavLink>
        <NavLink
          className="component-item"
          style={getActiveStyle}
          to="/components/image"
        >
          Image
        </NavLink>
      </div>
    </div>
  );
};

export default Components;
