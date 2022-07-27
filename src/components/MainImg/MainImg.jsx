import "./MainImg.css";

import React, { Component } from "react";

class MainImg extends Component {
  render() {
    return (
      <div className="main-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default MainImg;
