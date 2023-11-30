import React, { useEffect, useRef } from "react";
import ForwardRef from "./ForwardRef";

const From = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>
        <ForwardRef ref={inputRef} type="text" placeholder="Enter something" />
      </p>
    </div>
  );
};

export default From;
