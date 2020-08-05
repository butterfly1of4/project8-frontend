import React from "react";
import "./Icon.css";

const Icon = (props) => {
  let classList = "";

  let types = ["icon"];

  if (types.includes(props.type)) {
    classList += `icon`;
  }

  return (
    <button className={classList} onClick={props.whenClicked}>
      <img src={props.img} /> {props.label}
    </button>
  );
};

export default Icon;
