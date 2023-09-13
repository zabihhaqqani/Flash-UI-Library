import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <SideBar />

      </div>
    </div>
  );
}

export default App;
