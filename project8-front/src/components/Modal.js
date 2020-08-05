import React, { Component } from "react";
import App from "../App";
import { render } from "react-dom";

let url = "https://project8-backend.herokuapp.com/";

const optionGET = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  class Modal extends Component {
    constructor() {
      super();
      this.state = {
        netflixid: String,
        title: String,
        image: String,
        synopsis: String,
        released: String,
        unogsdate: String
      }; //state
    } //constructor

    render () {
        return (
        <div>


        </div>

        )//return
    }//render


}//component

export default Modal;
