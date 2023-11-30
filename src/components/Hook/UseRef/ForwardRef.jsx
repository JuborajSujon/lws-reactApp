import React from "react";
const ForwardRef = ({ type, placeholder }, ref) => {
  return <input ref={ref} type={type} placeholder={placeholder} />;
};

const forwardedInput = React.forwardRef(ForwardRef);
export default forwardedInput;
