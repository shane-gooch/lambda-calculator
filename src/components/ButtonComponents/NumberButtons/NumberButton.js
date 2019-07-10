import React from "react";

const NumberButton = props => {
  return (
    <>
      <button
        className={props.number === "0" ? "numberButton zero" : "numberButton"}
        onClick={() => props.numberHandler(props.number)}
      >
        {props.number}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
