import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container my-5" id="main-container"{...props} />;
}

export default Wrapper;
