import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        className="operatorButton"
        onClick={() => props.operatorHandler(props.char, props.value)}
      >
        {props.char}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
