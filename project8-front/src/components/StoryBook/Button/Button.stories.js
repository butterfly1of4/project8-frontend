import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

function onClick() {
  alert("you clicked me");
}

storiesOf("Button", module)
  .add("Search", () => (
    <Button type="search" whenClicked={onClick} label="Search" />
  ))
  .add("Update", () => (
    <Button type="update" whenClicked={onClick} label="Update" />
  ));
