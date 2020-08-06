import React from "react";
import { storiesOf } from "@storybook/react";
import MovieForm from "./MovieForm";

storiesOf("MovieForm", module)
  .add("Image", () => <input placeholder="img url" type="url" />)
  .add("Title", () => <input placeholder="movie title" type="title" />)
  .add("Synopsis", () => <input placeholder="synopsis" type="synopsis" />)
  .add("Release Date", () => (
    <input placeholder="release date" type="release date" />
  ));
