import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";

let url = "https://project8-backend.herokuapp.com/";


class Update extends Component {
    constructor() {
      super();
      this.state = {
        title: "",
      }; //state
    } //constructor
    render() {
      return (
        <div>
          <form onSubmit={this.update}>
            <input
              type="text"
              id="title"
              placeholder="update title"
            ></input>
  
            <input
              type="submit"
              id="submit"
              placeholder="submit changes here"
            ></input>
          </form>
        </div>
      ); //return
    } //render
  
    update = (e) => {
      e.preventDefault();
      console.dir(e.target[0].value);
      console.log(this.props.match.params.title);
      console.log(url + "/title/" + this.props.match.params.title);
      const formData = {
          "title": document.querySelector("input").value
      }
     
      console.log(formData);
     
      const optionPUT = {
        "method": "PUT",
        "headers": {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      fetch(url + "/title/edit/" + this.props.match.params.title, optionPUT)
        .then((res)=> res.json())
        .then((data) =>
        console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }; //update
  } //component
  
  export default Update;