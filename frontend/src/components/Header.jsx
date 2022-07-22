import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import jukebox from "../assets/jukebox.jpg";

function Header() {
  return (
    <div className="navbarContent">
      <nav>
        <div className="navbarLogo">
          <Link to="/">
            <img className="logo" src={jukebox} alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/AboutMe">About me</Link>
          </li>
          <li>
            <Link to="/Projects">My projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
