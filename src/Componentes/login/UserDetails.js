import React, { Component } from "react";

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
        this.setState({ userData: data.data });
        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "/";
        }
      });
  }
  logOut = () => {
    window.localStorage.clear();
    window.location.href="/";
  };
  render() {
    return (
      <div className="UserDetail">
        {this.state.userData.fname}
        <button onClick={this.logOut}>Cerrar sesion</button>
      </div>
    );
  }
}
