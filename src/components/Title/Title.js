import React from "react";
import "./Title.style.scss";

const Title = props => (
  <div>
    <h1 className="title">{props.title}</h1>
  </div>
);

export default Title;
