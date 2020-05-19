import React, { Component } from "react";

class LightSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default LightSwitch;
