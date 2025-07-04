import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Link to dark theme styles

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">Tanstack</div>
      <nav className="nav-links">
        <NavLink to="/rq" className="nav-link" activeclassname="active">
          FetchRQ
        </NavLink>
        <NavLink to="/trad" className="nav-link" activeclassname="active">
          FetchOld
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
