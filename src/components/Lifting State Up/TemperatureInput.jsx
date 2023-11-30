import React from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  return (
    <>
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input
          className="form-control w-60"
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </>
  );
};

export default TemperatureInput;
