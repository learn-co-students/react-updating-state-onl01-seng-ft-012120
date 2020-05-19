import React, { Component } from "react";
import LightSwitch from "./LightSwitch";
class ClickityClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
      };
    });
  };
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
        <LightSwitch />
      </div>
    );
  }
}

export default ClickityClick;
