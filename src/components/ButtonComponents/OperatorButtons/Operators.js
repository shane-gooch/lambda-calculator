import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

//import any components needed
import { operators } from "../../../data";
//Import your array data to from the provided data file

const Operators = props => {
  const [operatorsList, setOperator] = useState({ operators });
  return (
    <div className="operatorsContainer">
      {operatorsList.operators.map(operator => {
        return (
          <div key={operator.value}>
            <OperatorButton
              char={operator.char}
              value={operator.value}
              operatorHandler={props.operatorHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Operators;
