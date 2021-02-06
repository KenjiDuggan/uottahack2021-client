import React from "react";

const SampleComponent = ({ color }) => {
  const word = "hello";

  return (
    <div>
      {word}
      {color}
    </div>
  );
};

export default SampleComponent;
