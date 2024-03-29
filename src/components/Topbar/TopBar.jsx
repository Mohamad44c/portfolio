import React from "./TopBar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="intro" className="logo">
            MC
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+961 78 830254</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a href="mailto:mchebli008@hotmail.com">mchebli008@hotmail.com</a>
            </span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>
              <a
                rel="noreferrer"
                href="https://github.com/Mohamad44c"
                target="_blank"
                className="githubLink"
              >
                Github
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
