import React, { useState } from "react";
import SelfInput from "./SelfInput";
import "./EntryForm.scss";

const EntryForm = (props) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <div className="EntryForm">
        {submitted ? (
          <div>
            <h1 className="FormHeader">Submitted! </h1>
            <br />
            <br />
            <br />
            <br />
            <h3> Thank you for helping make Stevens a safer place!</h3>
          </div>
        ) : (
          <div>
            <h1 className="FormHeader">
              Stevens COVID-19 Self Check-In Questionnaire
            </h1>
            <SelfInput
              dataMemory={props.dataMemory}
              setDataMemory={props.setDataMemory}
              completeSubmit={setSubmitted}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default EntryForm;
