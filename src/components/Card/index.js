import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Card({ image, alt, project_link, github_link }) {
  return (
    <div className="col-sm m-3 text-center portfolio">
      <a href={project_link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          className="portfolio-image card-img-top"
          alt={alt}
        />
      </a>
      <div className="card-body text-center">
        <a href={github_link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  size="3x" />
        </a>
      </div>
    </div>
  );
}

export default Card;
