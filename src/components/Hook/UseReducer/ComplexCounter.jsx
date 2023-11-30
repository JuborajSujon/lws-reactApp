import { useReducer } from "react";
import React from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Count - {count.counter}</h1>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment by One
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement by One
        </button>
      </div>
      <div>
        <h1>Count2 - {count.counter2}</h1>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment by One
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement by One
        </button>
      </div>
    </>
  );
};

export default ComplexCounter;
