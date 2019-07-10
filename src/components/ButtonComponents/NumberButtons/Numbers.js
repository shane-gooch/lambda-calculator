import React, { useState } from "react";
import NumberButton from "./NumberButton";

//import any components needed
import { numbers } from "../../../data";
//Import your array data to from the provided data file

const Numbers = props => {
  const [numbersList, setNumber] = useState(numbers);
  // STEP 2 - add the imported data to state

  return (
    <div className="numbersContainer">
      {numbersList.map(number => {
        return (
          <div key={number} className="">
            <NumberButton number={number} numberHandler={props.numberHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default Numbers;
