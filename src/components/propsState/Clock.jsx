/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Clock extends Component {
  // eslint-disable-next-line no-useless-constructor
  state = { date: new Date() };

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

  render() {
    return (
      <div>
        <h1 className="heading text-7xl text-center mt-20">
          <span className="text">Hello {this.state.date.toLocaleTimeString(this.props.local)}</span>
        </h1>
      </div>
    );
  }
}
