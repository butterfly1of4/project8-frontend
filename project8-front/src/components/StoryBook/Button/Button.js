import React from "react";
import "./Button.css";

const Button = (props) => {
  let classList = "";

  let types = ["search", "info", "delete", "update"];

  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }
  return (
    <button className={classList} onClick={props.whenClicked}>
      {props.label}
    </button>
  );
};

export default Button;
