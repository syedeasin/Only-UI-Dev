import React from "react";
import Button from "../Button.jsx";

const CardTitle = ({ title, description, buttonText, onclick }) => {
  return (
    <div>
      <div className="content-wrapper flex justify-between items-start">
        <div className="cardTitles">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <Button onButtonClick={onclick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default CardTitle;
