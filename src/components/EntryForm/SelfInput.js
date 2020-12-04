import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  DatePicker,
  DatePickerInput,
  Checkbox,
  RadioButtonGroup,
  RadioButton,
  Button,
} from "carbon-components-react";
import "./EntryForm.scss";

const SelfInput = (props) => {
  const [testStatus, setTestStatus] = useState("No");
  const [exposureStatus, setExposureStatus] = useState("Yes");
  const [testType, setTestType] = useState("Antibody");

  function determineTestStatus() {
    let radios = document.getElementsByName("testStatus");
    radios.forEach((radio) => {
      if (radio.checked) {
        setTestStatus(radio.value);
      }
    });
  }
  function determineExposure() {
    let radios = document.getElementsByName("exposure");
    radios.forEach((radio) => {
      if (radio.checked) {
        setExposureStatus(radio.value);
      }
    });
  }
  function determineTestType() {
    if (testStatus !== "No") {
      let radios = document.getElementsByName("testType");
      radios.forEach((radio) => {
        if (radio.checked) {
          setTestType(radio.value);
        }
      });
    }
  }
  const getCheckedValuesArray = () => {
    let checkedValues = [];
    for (let index = 1; index < 10; index++) {
      const getID = `checked-${index}`;
      if (document.getElementById(getID).checked)
        checkedValues.push(document.getElementById(getID).value);
    }
    return checkedValues;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("submitID").disabled = true;
    let selectedValues = {
      fullname: document.getElementById("fullname").value,
      cwid: document.getElementById("cwid").value,
      id: document.getElementById("cwid").value,
      location: document.getElementById("oncampus-when").value,
      status: document.getElementById("department").value,
      testStatus: testStatus,
      additional: document.getElementById("additional").value,
      testInfo: "",
      testDate: "",
      symptoms: "",
      exposure: "",
    };
    if (testStatus !== "No") {
      selectedValues.testInfo = testType;
    }
    if (testStatus === "positive" || testStatus === "negative") {
      selectedValues.testDate = document.getElementById("test-when").value;
    }
    if (testStatus !== "positive") {
      selectedValues.symptoms = getCheckedValuesArray();
      selectedValues.exposure = exposureStatus;
    }
    console.log(selectedValues);
    let res = props.dataMemory.push(selectedValues);
    props.setDataMemory(res);
    document.getElementById("submitLogin").disabled = false;
    props.completeSubmit(true);
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/* Name */}
      <FormGroup legendText="">
        <TextInput
          id="fullname"
          invalidText="Please enter your first and last name."
          labelText="Full Name"
          placeholder="Annie Pearson"
          required
        />
      </FormGroup>
      {/* ID */}
      <FormGroup legendText="">
        <TextInput
          id="cwid"
          invalidText="ID is required."
          labelText="Campus ID (CWID or Employee ID)"
          required
        />
      </FormGroup>
      {/* On Campus When */}
      <FormGroup legendText="">
        {/* display != none when tested */}
        <DatePicker dateFormat="m/d/Y" datePickerType="single">
          <DatePickerInput
            id="oncampus-when"
            placeholder="mm/dd/yyyy"
            labelText="When were you last on campus?"
            type="text"
            required
          />
        </DatePicker>
      </FormGroup>
      {/* Status (Student, Faculty/Staff, Guest, Other) */}
      <FormGroup legendText="">
        <Select
          defaultValue="Student"
          id="department"
          invalidText="Please select your status."
          labelText="Status"
        >
          <SelectItem text="Student" value="Student" />
          <SelectItem text="Faculty/Staff" value="Faculty/Staff" />
          <SelectItem text="Guest" value="Guest" />
          <SelectItem text="Other" value="Other" />
        </Select>
      </FormGroup>
      {/* Test */}
      <FormGroup legendText="Have you gotten tested for COVID-19?">
        <RadioButtonGroup
          orientation="vertical"
          labelPosition="right"
          defaultSelected="No"
          id="testStatus"
          name="testStatus"
          invalidText="Enter test status."
          valueSelected="No"
          onChange={() => determineTestStatus()}
        >
          <RadioButton id="radio-01" labelText="No" value="No" />
          <RadioButton
            id="radio-02"
            labelText="Yes - Waiting on results"
            value="wait"
          />
          <RadioButton
            id="radio-03"
            labelText="Yes - Positive"
            value="positive"
          />
          <RadioButton
            id="radio-04"
            labelText="Yes - Negative"
            value="negative"
          />
        </RadioButtonGroup>
      </FormGroup>
      {/* Antibody vs Active Infection (If tested) */}
      {testStatus !== "No" && (
        <div>
          <FormGroup legendText="What type of test did you take?">
            <RadioButtonGroup
              orientation="vertical"
              labelPosition="right"
              defaultSelected="Antibody"
              legend=""
              name="testType"
              id="testType"
              valueSelected="Antibody"
              onChange={() => determineTestType()}
            >
              <RadioButton
                id="radio-11"
                labelText="Antibody"
                value="Antibody"
              />
              <RadioButton
                id="radio-12"
                labelText="Active Infection"
                value="Active Infection"
              />
            </RadioButtonGroup>
          </FormGroup>
          {/* Test Date (If test is positive or negative) */}
          {(testStatus === "positive" || testStatus === "negative") && (
            <FormGroup legendText="">
              {/* display != none when tested */}
              <DatePicker dateFormat="m/d/Y" datePickerType="single">
                <DatePickerInput
                  id="test-when"
                  placeholder="mm/dd/yyyy"
                  labelText="When did last get tested?"
                  type="text"
                  required
                />
              </DatePicker>
            </FormGroup>
          )}
          {/*----- EOL for positive testers -----*/}
        </div>
      )}
      {testStatus !== "positive" && (
        <div>
          {/* Symptoms Checklist (Unless positive 14 days+ ago) */}
          <fieldset className="bx--fieldset">
            <legend className="bx--label">
              Have you had any of the following Symptoms?
            </legend>
            <Checkbox
              labelText="Cold or cough"
              id="checked-1"
              value="Cold/Cough"
            />
            <Checkbox
              labelText="Fever (≥37.5C/99.5F)"
              id="checked-2"
              value="Fever"
            />
            <Checkbox labelText="Tiredness" id="checked-3" value="Tiredness" />
            <Checkbox
              labelText="Difficulty breathing"
              id="checked-4"
              value="Difficulty Breathing"
            />
            <Checkbox
              labelText="Sore throat"
              id="checked-5"
              value="Sore Throat"
            />
            <Checkbox labelText="Diarrhea" id="checked-6" value="Diarrhea" />
            <Checkbox
              labelText="Aches/pains"
              id="checked-7"
              value="Aches/pains"
            />
            <Checkbox
              labelText="Shortness of breath"
              id="checked-8"
              value="Shortness of breath"
            />
            <Checkbox
              labelText="New loss of taste or smell"
              id="checked-9"
              value="sense loss"
            />
          </fieldset>
          {/* Exposure Options */}
          <FormGroup legendText="Within the last two weeks, have you been in close contact with a person confirmed to have COVID-19 or with a person under quarantine because of a suspected case of COVID-19 infection (Including travel)?">
            <RadioButtonGroup
              orientation="vertical"
              labelPosition="right"
              defaultSelected="Yes"
              legend="If unsure, choose yes"
              name="exposure"
              id="exposure"
              valueSelected="Yes"
              onChange={() => determineExposure()}
            >
              <RadioButton id="radio-21" labelText="Yes" value="Yes" />
              <RadioButton id="radio-22" labelText="No" value="No" />
              <RadioButton id="radio-23" labelText="Unsure" value="Unsure" />
            </RadioButtonGroup>
          </FormGroup>
        </div>
      )}
      {/* Extra Info */}
      <FormGroup legendText="">
        <TextArea
          cols={50}
          helperText="Example: special risks, contact tracing, etc."
          id="additional"
          labelText="More information (Optional)"
          placeholder="Describe your situation..."
          rows={3}
        />
      </FormGroup>
      {/* SUBMIT */}
      <Button
        kind="secondary"
        tabIndex={0}
        type="submit"
        className="SubmitBtn"
        id="submitID"
      >
        Submit
      </Button>
    </Form>
  );
};
export default SelfInput;
