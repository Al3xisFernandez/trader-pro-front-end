import React, { Component } from "react";
import SignUp from "./SignUp";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data });
        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./SignUp";
        }
      });
  }
  logOut = () => {
    window.localStorage.clear();
    window.location.href="./SignUp";
  };
  render() {
    return (
      <div>
       name  <h1> {this.state.userData.fname}</h1>
        Email<h1> {this.state.userData.email}</h1>
        <br />
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}
