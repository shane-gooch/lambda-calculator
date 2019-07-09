import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button onClick={() => props.specialHandler(props.special)}>
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;
