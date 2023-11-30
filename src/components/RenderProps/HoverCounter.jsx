import React, { Component } from "react";

export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
  return (
    <div>
      <h1 type="button" onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}
