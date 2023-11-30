/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}
