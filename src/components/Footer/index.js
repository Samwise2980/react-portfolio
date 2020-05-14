import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col mt-3 text-center">
          <p>
            <FontAwesomeIcon icon={faGithub} size="1x" />
            <a
              href="https://github.com/Samwise2980"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
            <a
              href="https://www.linkedin.com/in/samuel-foster-67205519b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </p>
        </div>
      </div>{" "}
    </footer>
  );
}

export default Footer;
