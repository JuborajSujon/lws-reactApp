import React from "react";

const Text = ({ addEmoji, addBraket }) => {
  let text = `I am JavaScript Programming Language.`;
  if (addEmoji) {
    text = addEmoji(text, "❤️");
  }
  if (addBraket) {
    text = addBraket(text);
  }
  return <div>{text}</div>;
};

export default Text;
