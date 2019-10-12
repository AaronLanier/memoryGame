import React from "react";
import "./style.css";

const Banner = props => (
  <div className="Banner">
    <div className="Banner">{props.children}</div>
    <div className="scores">
      <h1>Score: {props.score} Highscore: {props.highscore}</h1>
    </div>
  </div>
);

export default Banner;