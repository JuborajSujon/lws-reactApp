import React, { useEffect, useState, useRef } from "react";

const AsStore = () => {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);
    return () => clearInterval(buttonRef.current);
  });
  return (
    <div className="text-center mt-5 h1">
      <p className="display-3">Time: {date.toLocaleTimeString()}</p>
      <p>
        <button
          type="button"
          className="btn btn-primary btn-lg w-50"
          onClick={() => clearInterval(buttonRef.current)}>
          Click
        </button>
      </p>
    </div>
  );
};

export default AsStore;
