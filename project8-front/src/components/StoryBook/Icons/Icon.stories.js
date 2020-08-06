import React from "react";
import { storiesOf } from "@storybook/react";
import Icons from "./Icon";
import info from "./info.png";
import trash from "./trash.png";

function onClick() {
  alert("you clicked me");
}

storiesOf("Icons", module)
  .add("Info", () => (
    <Icons type="icon" whenClicked={onClick} info img={info} />
  ))
  .add("Trash", () => (
    <Icons type="icon" whenClicked={onClick} trash img={trash} />
  ));
