import React, { Component } from "react";
import logo from "./images/logo.png";
// import backgroundimage from "./images/backgroundimage.jpg";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import newReleases from "./components/newReleases";
import expiring from "./components/expiring";
import Modal from "./components/Modal";
import Update from "./components/update";
import Create from "./components/create";

// import Button from "./components/Button/Button";

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
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create" exact component={Create} />
            <Route path="/newReleases" exact component={newReleases} />
            <Route path="/expiring" exact component={expiring} />
            <Route
              path="/newReleases/update/:title"
              render={(routerProps) => <Update {...routerProps}></Update>}
            />
          </Switch>
        </div>
      </div>
    );
  } //render
  componentDidMount() {
    fetch(url, optionGET, optionDELETE)
      .then((res) => res.json())
      .then((convertedResponse) => {
        console.log(convertedResponse);
        console.log(convertedResponse[0].title);

        this.setState({
          name: convertedResponse[0].title,
        });
      });
  }
} //component

export default App;
