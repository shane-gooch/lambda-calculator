import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
//import any components needed
import { specials } from "../../../data";
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialsList, setSpecial] = useState(specials);
  return (
    <div className="specialContainer">
      {specialsList.map(special => {
        return (
          <div key={special}>
            <SpecialButton
              special={special}
              specialHandler={props.specialHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Specials;
