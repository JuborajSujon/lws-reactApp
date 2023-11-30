import React from "react";
const Title = () => {
  console.log("rendering title...");
  return <h2>useCallback Hook Tutorial</h2>;
};

export default React.memo(Title);
