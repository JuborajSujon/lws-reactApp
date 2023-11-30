/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emojj) => `${emojj} ${text} ${emojj}`;
  render() {
    return this.props.children({ addEmoji: this.addEmoji });
  }
}
