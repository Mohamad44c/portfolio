import TopBar from "./components/Topbar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
import Menu from "./components/Menu/Menu";
import Certificates from "./components/Certificates/Certificates";
import "./App.scss";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Experience />
        <Certificates />
      </div>
    </div>
  );
}

export default App;