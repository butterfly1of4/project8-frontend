import React, { Component } from "react";
// import App from "../App";
import App from "../App.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Button from "./StoryBook/Button/Button";
import Info from "./StoryBook/Icons/info.png";
import Trash from "./StoryBook/Icons/trash.png";
import Icon from "./StoryBook/Icons/Icon.css";
//import the API
let url = "https://project8-backend.herokuapp.com/expire";
let style = {
  width: 30,
  height: 30,
};
//CRUD paths
const optionGET = {
  method: "GET",
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
class Expiring extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      clicked: true,
    }; //state
  } //constructor
  componentWillMount() {
    fetch(url, optionGET)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => {
        console.log(err);
      });
  } //componentWillMount
  render() {
    let list = this.state.data.map((item) => {
      return (
        <div className="container">
          <>
            <div className="title" key={item}>
              {item.title}
            </div>
            <img src={item.image} />
            <div className="button-class">
              <button
                className="delete"
                onClick={(e) => {
                  this.remove(item.title);
                }}
              >
                <img style={style} className="Trash" src={Trash} />
              </button>{" "}
              <button
                className="information"
                onClick={(e) => {
                  this.showModal(item.synopsis);
                }}
              ></button>
              <img style={style} className="Info" src={Info} />{" "}
            </div>
          </>
        </div>
      ); //return
    }); //map
    return (
      <React.Fragment>
        <Modal />
        <div className="list">{list}</div>
      </React.Fragment>
    );
  } //render
  showModal = (e) => {
    console.dir(e);
    let info = this.state.data.synopsis;
    document.querySelector(".information").innerHTML = e;
    // document.querySelector(".box").style.opacity = 1;
    // document.querySelector(".close").style.opacity = 1;
    this.setState({ clicked: !this.state.clicked });
  }; //showModal
  remove(title) {
    fetch(url + "/" + title, optionDELETE)
      .then(() => {
        console.log("removed");
        this.setState({
          data: this.state.data.filter((item) => {
            return item.title !== title;
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } //remove
  update(item) {
    console.log("update works");
  }
} //component
export default Expiring;
