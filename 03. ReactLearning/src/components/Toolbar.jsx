import React from "react";

function Button({ onClick, children }) {
  return (
    <>
      <button className="btn-default ml-6" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

const Toolbar = ({ onPlayMovie, onPlayVideo }) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onPlayVideo}>Play Video</Button>
    </div>
  );
};

export default Toolbar;
