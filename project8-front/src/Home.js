import React, { Component } from "react";
import logo from "./images/logo.png";
import { Route, Link, Switch } from "react-router-dom";
import backgroundimage from "./images/backgroundimage.jpg";
import "./App.css";

class Home extends Component {
    render () {
        return (
            <>
            <img className="curtain" src={backgroundimage} />
            <Switch>
            <Link to="/expiring">
            <button className="HPLinkButton">Expiring</button>
          </Link>
         
          <Link to="/newReleases">
            <button className="HPLinkButton">New Releases</button>
          </Link>
          </Switch>
          </>
        )
    }
}

export default Home;