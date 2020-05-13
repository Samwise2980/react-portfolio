import React from "react";
import "./style.css";

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
          <i class="fab fa-github fa-3x portfolio-link"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
