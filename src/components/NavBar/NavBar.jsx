import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <h2 className="logo">Flash UI</h2>
      </div>
      <div className="nav-bar-right-section">
        <a href="/">Home</a>
        <a href="/components">Components</a>
        <a href=""></a>
      </div>
    </nav>
  );
};

export default NavBar;
