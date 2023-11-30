import React, { useEffect, useState } from "react";

const UseEffectFn = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // const [text, setText] = useState("");

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    console.log("Updating date");
    setDate(new Date());
  };
  useEffect(() => {
    console.log("Updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("update date");
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-5 h1">
      <p className="display-6">Time: {date.toLocaleTimeString()} </p>
      {/* <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p> */}
      <p>
        <button
          type="button"
          className="btn btn-primary btn-lg w-50"
          onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
};

export default UseEffectFn;
