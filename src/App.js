import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState("");
  const [holdingState, setHoldingState] = useState("");
  const [operatorMath, setOperatorMath] = useState("");

  const numberHandler = number => {
    setDisplay(parseInt(display + number));
  };

  const specialHandler = special => {
    if (special === "C") {
      setDisplay("");
      setHoldingState("");
    }
  };

  const operatorHandler = (char, value) => {
    if (char === "+" || "-" || "x" || "/") {
      setHoldingState(display);
      setOperatorMath(value);
      setDisplay("");
    }
    if (char === "=") {
      setDisplay(eval(`holdingState ${operatorMath} display`));
      setHoldingState("");
      setOperatorMath("");
    }
  };

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display display={display} />
        <div className="calcOperations">
          <div className="row">
            <div>
              <Specials specialHandler={specialHandler} />
              <Numbers numberHandler={numberHandler} />
            </div>
            <Operators operatorHandler={operatorHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
