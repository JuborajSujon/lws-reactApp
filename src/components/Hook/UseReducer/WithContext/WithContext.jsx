/* eslint-disable react-refresh/only-export-components */
import React, { useReducer } from "react";
import ComponentA from "./ComponentA";

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function WithContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}
