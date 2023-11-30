import React, { useState } from "react";

const UseStateFn = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You need JavaScript skill to complete the task. Do you have it?"
      : null;
    setTodo(inputValue);
    setWarning(warning);
  };
  return (
    <div>
      <p className="display-6">{todo}</p>
      <p>
        <textarea
          style={{ width: "300px", height: "30px" }}
          name="todo"
          value={todo}
          onChange={handleInput}
        />
      </p>
      <hr />
      <h2>{warning || " Good Choice "}</h2>
    </div>
  );
};

export default UseStateFn;
