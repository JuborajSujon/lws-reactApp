import React, { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emojj) => `${emojj} ${text} ${emojj}`;
  render(overwrite) {
    let text = `I am the Emoji component`;
    if (overwrite) {
      text = overwrite;
    }
    return <div>{text}</div>;
  }
}
