/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Braket extends Component {
  addBraket = (text) => `[ ${text} ]`;
  render() {
    return this.props.children({ addBraket: this.addBraket });
  }
}
