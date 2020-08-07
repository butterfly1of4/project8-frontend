import React, { Component } from "react";
import logo from "../images/logo.png";
// import backgroundimage from "./images/backgroundimage.jpg";
import { Route, Link, Switch } from "react-router-dom";
import "../../src/App.css";
// import newReleases from "./com
class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <Link to="/expiring">
          <button className="pageLinkButton">Expiring</button>
        </Link>

        <Link to="/newReleases">
          <button className="pageLinkButton">New Releases</button>
        </Link>

        <Link to="/create">
          <button className="pageLinkButton">Add New Movie</button>
        </Link>
      </nav>
    );
  }
}
export default Nav;
