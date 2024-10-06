import React from "react";

const Button = ({ onButtonClick, children }) => {
  return (
    <div>
      <button className="btn-default" onClick={onButtonClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
