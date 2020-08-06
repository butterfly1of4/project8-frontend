import React, { Component } from "react";
import logo from "./images/logo.png";
import backgroundimage from "./images/backgroundimage.jpg";
import "./App.css";

class Home extends Component {
  render() {
    return (
      //    <div></div>
      <img className="curtain" src={backgroundimage} />
    );
  }
}

export default Home;
