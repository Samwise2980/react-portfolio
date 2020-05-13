import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();

  const navLinkClassName = (path) =>
    path === location.pathname ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Samuel Foster
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className={navLinkClassName("/home")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={navLinkClassName("/portfolio")}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={navLinkClassName("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
