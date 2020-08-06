import React, { Component } from "react";
import logo from "./images/logo.png";
import backgroundimage from "./images/backgroundimage.jpg";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import newReleases from "./components/newReleases";
import expiring from "./components/expiring";
import Modal from "./components/Modal";
import Update from "./components/update";
import Button from "./components/Button/Button";
import Nav from "./components/Nav";
import Home from "./Home";

let url = "https://project8-backend.herokuapp.com/";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const optionPOST = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
};

const optionPUT = {
  method: "PUT",
  headers: {
    Accept: "application/json",
  },
};

const optionDELETE = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Switch>
            <Route path="/" exact />
            <Route path="/newReleases" exact component={newReleases} />
            <Route path="/expiring" exact component={expiring} />
            <Route
              path="/newReleases/update/:title"
              render={(routerProps) => <Update {...routerProps}></Update>}
            />
          </Switch>
        </div>
        <Home />
      </div>
    );
  } //render
  componentDidMount() {
    //fetch request to the API
    fetch(url, optionGET, optionDELETE)
      //converting the API to readable code. Naming it convertedResponse
      .then((res) => res.json())
      .then((convertedResponse) => {
        //console.log to see if it works
        console.log(convertedResponse);
        console.log(convertedResponse[0].title);
        // setting State to fetch a new title name each time the page is loaded. It was empty when defined earlier.
        this.setState({
          name: convertedResponse[0].title,
        });
      });
  }
} //component

export default App;
