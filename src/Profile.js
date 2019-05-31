import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div id="container">
        <h1>Profile</h1>
        <hr id="tophr"></hr>
        <div class="row">
          <div class="col-md-4">
            <h2>
              About me
          </h2>
            <p>
              Sample Text
          </p>
          </div>
          <div class="col-md-4 ">
            <br></br>
            <br></br>
            <img src="./aaron-bitmoji.png" />
          </div>
          <div class="col-md-4">
            <h2>
              Details
          </h2>
            <h5>Name:</h5>
            <p>
              Aaron Mulvaney
            </p>
            <h5>Age:</h5>
            <p>
              23 years
            </p>
            <h5>Location:</h5>
            <p>
              Dublin, Ireland
            </p>
            <div id="soc-buttons">
              <a class="fa fa-lin fa-linkedin-square" href="https://www.linkedin.com/in/aaronmulvaney/" />
              <a class="fa fa-github fa-github" href="https://github.com/mulvaney08" />
              <a class="fa fa-goo fa-google" href="mailto://aaronmulvaney@gmail.com" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Profile;