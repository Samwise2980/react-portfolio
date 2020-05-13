import React from "react";
import Card from "../components/Card";

export default function () {
  return (
    <div>
      <div class="row">
        <div class="col title-text text-center mt-3">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <hr />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <Card image="../../public/assets/images/whats-up-there.png" alt="whats up there?" project_link="https://whats-up-there.herokuapp.com/"  github_link="https://github.com/SeeShell/whats-up-there"/>
        <Card image="../../public/assets/images/moodies-mobile.png" alt="Moodies" project_link="https://sylhuynh.github.io/moodies/index.html" github_link="https://github.com/sylhuynh/moodies"/>
        <Card image="../../public/assets/images/coding-quiz-mobile.png" alt="" project_link="https://samwise2980.github.io/coding-quiz/" github_link=""/>
        <Card image="" alt="" project_link="" github_link=""/>
        <Card image="" alt="" project_link="" github_link=""/>
        <Card image="" alt="" project_link="" github_link=""/>
      </div>
    </div>
  );
}
