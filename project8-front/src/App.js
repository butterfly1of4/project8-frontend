
import React, { Component }from "react";
import logo from "../src/logo.png";

import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import newReleases from "./components/newReleases";


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
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <nav>
                    <img src={logo}/>
                    <h1>Add search bar</h1>
                    <h1>Add button links to Expiring</h1>
                    <h1>Add button links to New Releases</h1>
                </nav>
                <main>
                    <Route path="/newReleases" exact component={newReleases}/>

                </main>
            </div>
        )
    }//render
}//component

export default App;
