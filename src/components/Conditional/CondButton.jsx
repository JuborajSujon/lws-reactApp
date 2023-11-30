import React, { Component } from "react";

export default class CondButton extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: nextChange, locale: nextLocale } = nextProps;
    const { change: prevChange, locale: prevLocale } = this.props;
    if (nextChange === prevChange && nextLocale === prevLocale) {
      return false;
    }
    return true;
  }
  render() {
    const { change } = this.props;
    return (
      <div>
        <button className="w-60" type="button" onClick={change}>
          Click Me
        </button>
      </div>
    );
  }
}
