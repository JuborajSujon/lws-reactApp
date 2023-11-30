import { useState, useCallback, useMemo } from "react";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

const Performance = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEventOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1; //Costly operation
    return count1 % 2 === 0;
  }, [count1]);

  console.log("isEventOrOdd", isEventOrOdd);

  return (
    <>
      <Title />
      <ShowCount title="Counter 1" count={count1} />
      <p>{isEventOrOdd ? "Even" : "Odd"}</p>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount title="Counter 2" count={count2} />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </>
  );
};

export default Performance;
