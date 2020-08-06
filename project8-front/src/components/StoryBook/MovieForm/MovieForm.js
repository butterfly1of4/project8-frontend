import React from "react";
import "./MovieForm.css";

const MovieForm = (props) => {
  let classList = "";
  let types = ["img", "title", "synopsis", "release date"];

  if (types.includes(props.type)) {
    classList += `movieForm-${props.type}`;
  }

  return <input class={classList}>{props.label}</input>;
};

export default MovieForm;
