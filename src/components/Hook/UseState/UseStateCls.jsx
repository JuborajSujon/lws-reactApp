import React, { Component } from "react";

export default class UseStateCls extends Component {
  state = {
    todo: "",
    warning: null,
  };
  handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You need JavaScript skill to complete the task. Do you have it?"
      : null;
    this.setState({ todo: inputValue, warning });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p className="display-6">{todo}</p>
        <p>
          <textarea
            style={{ width: "300px", height: "30px" }}
            name="todo"
            value={todo}
            onChange={this.handleInput}
          />
        </p>
        <hr />
        <h2>{warning || " Good Choice "}</h2>
      </div>
    );
  }
}
