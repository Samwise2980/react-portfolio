import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();

  const navLinkClassName = (path) =>
    path === location.pathname ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link className="navbar-brand mb-0 h1" to="/">
        Samuel Foster
      </Link>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-item nav-link">
              <Link to="/home" className={navLinkClassName("/home")}>
                About Me
              </Link>
            </span>
            <span className="nav-item nav-link">
              <Link to="/portfolio" className={navLinkClassName("/portfolio")}>
                Portfolio
              </Link>
            </span>
            <span className="nav-item nav-link">
              <Link to="/contact" className={navLinkClassName("/contact")}>
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
