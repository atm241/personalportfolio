import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#resume'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
