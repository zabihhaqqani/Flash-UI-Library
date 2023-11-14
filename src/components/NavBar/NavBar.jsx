import { useEffect, useState } from "react";
import "./NavBar.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const list = [
    "Avatar",
    "Alert",
    "Badge",
    "Button",
    "Card",
    "Headings",
    "Text",
    "Image",
  ];

  const componentsList = list.filter((component) =>
    component.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const showSearchBar = !(
    location.pathname === "/" || location.pathname === "/components"
  );

  useEffect(() => {
    setSearchTerm("");
  }, [navigate]);

  return (
    <nav className="nav-bar">
      <div>
        <h2 className="logo" onClick={() => navigate("/")}>
          <i className="fas fa-bolt"></i>FlashUI
        </h2>
      </div>
      <div className="search-container">
        {showSearchBar && (
          <input
            type="text"
            className="search-bar"
            placeholder="🔍 Search Components"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        )}

        {searchTerm && (
          <div className="search-list">
            {componentsList?.length > 0 ? (
              <>
                {componentsList.map(
                  (component, index) =>
                    searchTerm && (
                      <span
                        key={index}
                        className="search-item"
                        onClick={() =>
                          navigate(`/components/${component.toLowerCase()}`)
                        }
                      >
                        {component}
                      </span>
                    )
                )}
              </>
            ) : (
              "component not found!"
            )}
          </div>
        )}
      </div>
      <div className="nav-bar-right-section">
        <a href="/">Home</a>
        <a href="/components">Components</a>
        <a href="https://github.com/zabihhaqqani/Flash-UI-Library">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
