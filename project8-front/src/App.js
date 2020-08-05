
import React, { Component }from "react";
import logo from "../src/logo.png";

import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import newReleases from "./components/newReleases";
import expiring from "./components/expiring";
import Modal from "./components/Modal";


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
                   <Route path="/newReleases/update/:title" render={(routerProps) => (
            <Update {...routerProps}></Update>
          )} />

                </main>
            </div>
        )
    }//render
    componentDidMount() {
        //fetch request to the API
        fetch(url, optionGET, optionDELETE)
          //converting the API to readable code. Naming it convertedResponse
          .then((res) => res.json())
          .then((convertedResponse) => {
            //console.log to see if it works
            console.log(convertedResponse);
            console.log(convertedResponse[0].title);
            // setting State to fetch a new cocktail name each time the page is loaded. It was empty when defined earlier.
            this.setState({
              name: convertedResponse[0].title,
            });
          });
      }
}//component

export default App;
