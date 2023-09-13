import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Avatar from "./pages/Components/Avatar";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/components/avatar" element={<Avatar/>}/>
        </Routes>
    </div>
  );
}

export default App;
