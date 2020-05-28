import React from "react";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
export default function () {
  return (
    <Wrapper>
      {" "}
      <div className="row">
        <div className="col title-text text-center mt-3">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <Card
          image="assets/images/whats-up-there.png"
          alt="whats up there? Mobile Page"
          project_link="https://whats-up-there.herokuapp.com/"
          github_link="https://github.com/SeeShell/whats-up-there"
        />
        <Card
          image="assets/images/gamersaurus.png"
          alt="Gamersaurus Mobile Page"
          project_link="https://gamersaurus.herokuapp.com/"
          github_link="https://github.com/amboffman/gamersaurus"
        />
        <Card
          image="assets/images/moodies-mobile.png"
          alt="Moodies Mobile Page"
          project_link="https://sylhuynh.github.io/moodies/index.html"
          github_link="https://github.com/sylhuynh/moodies"
        />
      </div>
      <div className="row d-flex justify-content-center">
        <Card
          image="assets/images/weather-dashboard-mobile.png"
          alt="Weather Dashboard Mobile Page"
          project_link="https://samwise2980.github.io/weather-dashboard/"
          github_link="https://github.com/Samwise2980/weather-dashboard"
        />
        <Card
          image="assets/images/note-taker.png"
          alt="Burger Devourer Web Page"
          project_link="https://sheltered-ocean-89467.herokuapp.com/"
          github_link="https://github.com/Samwise2980/note-taker"
        />
        <Card
          image="assets/images/coding-quiz-mobile.png"
          alt="Coding Quiz Mobile Page"
          project_link="https://samwise2980.github.io/coding-quiz/"
          github_link="https://github.com/Samwise2980/coding-quiz"
        />
      </div>
    </Wrapper>
  );
}
