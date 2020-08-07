import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Info from "./StoryBook/Icons/info.png";
// import Button from "./Button/Button";
//import the API
let style = {
  width: 25,
  height: 25,
};
let url = "https://project8-backend.herokuapp.com/release";
//add CRUD paths if necessary
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
class newReleases extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }; //state
  } //constructor
  componentWillMount() {
    fetch(url, optionGET)
      //converting the API to readable code. Naming it convertedResponse
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
                className="synopsis"
                onClick={(e) => {
                  this.showModal(item.synopsis);
                }}
              >
                <img style={style} className="NRInfo" src={Info} />
              </button>{" "}
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
    this.setState({ clicked: !this.state.clicked });
  }; //showModal
  //   remove(title) {
  //     fetch(url + "/" + title, optionDELETE)
  //       .then(() => {
  //         console.log("removed");
  //         this.setState({
  //           data: this.state.data.filter((item) => {
  //             return item.title !== title;
  //           }),
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } //remove
  //   update(item) {
  //     console.log("update works");
  //   }
} //component
export default newReleases;
