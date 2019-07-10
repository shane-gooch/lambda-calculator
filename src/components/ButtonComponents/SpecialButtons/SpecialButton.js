import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button
        className="specialButton"
        onClick={() => props.specialHandler(props.special)}
      >
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;
