import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import logoSV from "../assets/logoSV.png";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "showNav" : null}`}>
        <div className="navbarLogo">
          <NavLink to="/">
            <img className="logo" src={logoSV} alt="logo" />
          </NavLink>
        </div>
        <ul className="navbarLinks">
          <li className="navbarItem slideInDown-1">
            <NavLink onClick={handleShowLinks} className="navbarLink" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-2">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/AboutMe"
            >
              About me
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-3">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Projects"
            >
              My projects
            </NavLink>
          </li>
          <li className="navbarItem slideInDown-4">
            <NavLink
              onClick={handleShowLinks}
              className="navbarLink"
              to="/Contact"
            >
              Contact me
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className="navbarBurger"
          onClick={handleShowLinks}
        >
          <span className="burgerBar" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
