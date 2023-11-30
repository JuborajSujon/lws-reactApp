import React, { Component } from "react";

export default class UseEffectCls extends Component {
  state = {
    count: 0,
    date: new Date(),
  };
  // by button click, count state change
  addClick = () => {
    this.setState(({ count }) => {
      return {
        count: count + 1,
      };
    });
  };

  //First time load
  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;

    //set interval using tick function every second
    setInterval(this.tick, 1000);
  }
  //Every time update with state change
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  //function set date state
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div className="text-center mt-5 h1">
        <p className="display-6">Time: {date.toLocaleTimeString()} </p>
        <p>
          <button
            type="button"
            className="btn btn-primary btn-lg w-50"
            onClick={this.addClick}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
