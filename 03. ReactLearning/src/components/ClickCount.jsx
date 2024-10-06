import React, { useState } from "react";

const ClickCount = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h4>This is your number: {count}</h4>
      <button
        className="btn-default"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Click Me
      </button>
    </div>
  );
};

export default ClickCount;
