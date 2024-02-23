import { Route, Routes, Link } from "react-router-dom";
import Red from "./componenets/Red";
import Blue from "./componenets/Blue";
import Home from "./componenets/Home";
import "./App.css";

function App() {
  return (
    <>
      <div id="navbar">
        <Link id="nav-button" to="/">Home</Link>
        <Link id="nav-button" to="/red">Red</Link>
        <Link id="nav-button" to="/blue">Blue</Link>
      </div>
      <div id="container">
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/red" element={<Red />} />
            <Route path="/blue" element={<Blue />} />
          </Routes>
        </div>
      </div>
      <footer id="footer">
        <Link className="gray" id="footer-button" to="/">Home</Link>
        <Link className="red" id="footer-button" to="/red">Red</Link>
        <Link className="blue" id="footer-button" to="/blue">Blue</Link>
      </footer>
    </>
  );
}

export default App;
