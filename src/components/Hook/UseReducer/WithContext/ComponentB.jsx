import { useContext } from "react";
import { counterContext } from "./WithContext";

const ComponentB = () => {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Component A</p>
      <button
        type="button"
        onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button
        type="button"
        onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
