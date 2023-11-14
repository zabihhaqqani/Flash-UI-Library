import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import Avatar from "./documentation/Avatar/Avatar";
import Alerts from "./documentation/Alerts/Alerts";
import Badges from "./documentation/Badges/Badges";
import Buttons from "./documentation/Buttons/Buttons";
import Cards from "./documentation/Cards/Cards";
import SideBar from "./components/SideBar/SideBar";
import Headings from "./documentation/Headings/Headings";
import Texts from "./documentation/Text/Text";
import Images from "./documentation/Image/Image";
import Components from "./pages/ComponentPage/Components";
import Home from "./pages/Home/Home";

function App() {
  const location = useLocation();
  const showSideBar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="App">
      <NavBar />
      <div className={showSideBar ? "main-container" : ""}>
        {showSideBar && <SideBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/avatar" element={<Avatar />} />
          <Route path="/components/alert" element={<Alerts />} />
          <Route path="/components/badge" element={<Badges />} />
          <Route path="/components/button" element={<Buttons />} />
          <Route path="/components/card" element={<Cards />} />
          <Route path="/components/headings" element={<Headings />} />
          <Route path="/components/text" element={<Texts />} />
          <Route path="/components/image" element={<Images />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
