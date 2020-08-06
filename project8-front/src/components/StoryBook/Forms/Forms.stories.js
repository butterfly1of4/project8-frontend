import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";

storiesOf("Forms", module).add("Search", () => (
  <input placeholder="Search Movie" type="search" />
));
