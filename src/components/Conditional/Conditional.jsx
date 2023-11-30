import React, { Component } from "react";
import CondButton from "./CondButton";

export default class Conditional extends Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    const { locale, date } = this.state;
    return (
      <div className="text-center mt-5">
        <h1 className="">
          <span className="text">Hello {date.toLocaleTimeString(locale)}</span>
        </h1>
        <CondButton change={this.handleClick} locale="en-US" />
      </div>
    );
  }
}
