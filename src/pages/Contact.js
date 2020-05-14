import React from "react";
import Wrapper from "../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <Wrapper>
      <div class="row">
        <div class="col mt-3 title-text text-center">
          <h3>Here's My Links</h3>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <hr />
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <p>
            <FontAwesomeIcon icon={faGithub} size="2x" />
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

      <div class="row">
        <div class="col text-center">
          <p>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
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
      </div>

      <div class="row">
        <div class="col text-center">
          <p>
            <FontAwesomeIcon icon={faFile} size="2x" />

            <a href="./assets/Samuel Foster Resume.pdf" target="_blank">
              {" "}
              Resume
            </a>
          </p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col title-text text-center">
          <h3>Lets Get in Touch</h3>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <hr />
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <p>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />

            <i class="fas fa-envelope-open-text fa-2x"></i> Email:{" "}
            <a
              href="mailto:samuelfoster0@gmail.com?Subject=Hello%20Samuel"
              target="_top"
            >
              samuelfoster0@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
