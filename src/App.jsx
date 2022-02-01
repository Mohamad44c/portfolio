import TopBar from "./components/Topbar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
// import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
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
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;