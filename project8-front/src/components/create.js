import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";
import { Link } from "react-router-dom";

let url = "https://project8-backend.herokuapp.com/release/title/";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Create extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }; //state
  } //constructor

  render() {
    return (
      <form onSubmit={this.create}>
        <input type="text" placeholder="create title" />
        <input type="submit" />
      </form>
    );
  } //render

  create = (e) => {
    e.preventDefault();
    const formData = {
      title: document.querySelector("input").value,
    };
    const optionPOST = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);

    fetch(url, optionPOST)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }; //update
} //component

export default Create;
