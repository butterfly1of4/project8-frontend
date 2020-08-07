import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";
import { Link } from "react-router-dom";

let url = "https://project8-backend.herokuapp.com/release/";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Update extends Component {
  constructor() {
    super();
    this.state = {
     data: []
    }; //state
  } //constructor

  componentWillMount() {
    fetch(url, optionGET)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .then(console.log(this.state.data))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let list = this.state.data.map((item) => {
      if (item.title === this.props.match.params.title) {
        return (
          <React.Fragment>

            <form onSubmit={this.update}>
              <input type="text" placeholder="Update Title"></input>
              <input type="submit"></input>
            </form>
        <p>{item.title}</p>
            <img src={item.image}/>
          </React.Fragment>
        );
      } else {
        return null;
      }
    }); //list
    return <div>{list}</div>;
  }//render

  update = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);
    console.log(this.props.match.params.title);
    console.log(url + this.props.match.params.title);
    const formData = {
      title: document.querySelector("input").value,
    };

    console.log(formData);

    const optionPUT = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url + this.props.match.params.title, optionPUT)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }; //update
} //component

export default Update;
