/* eslint-disable react/prop-types */
import React from "react";
const ShowCount = (props) => {
  const { title, count } = props;
  console.log(`rendering ${title}...`);
  return (
    <p>
      {title} : {count}
    </p>
  );
};

export default React.memo(ShowCount);
