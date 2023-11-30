import useWindowWidth from "./useWindowWidth";

const LayoutComponentTwo = () => {
  const onSmallScreen = useWindowWidth(700);
  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>This is another component {onSmallScreen ? "small" : "large"}</h1>
    </div>
  );
};

export default LayoutComponentTwo;
