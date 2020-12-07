import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
import "./App.scss";
import CTForm from "./components/EntryForm";
import Info from "./components/InfoPage";
import Admin from "./components/AdminPage";

const initialData = [
  {
    additional: "Asthmatic",
    cwid: "123-45-6789",
    exposure: "No",
    fullname: "Annie Pearson",
    location: "11/30/2020",
    status: "Student",
    symptoms: ["Cold/Cough"],
    testDate: "12/01/2020",
    testInfo: "Antibody",
    testStatus: "wait",
    verified: true,
    id: 0,
  },
  {
    additional: "",
    cwid: "987-65-4321",
    exposure: "Yes",
    fullname: "Peter Russo",
    location: "11/25/2020",
    status: "Guest",
    symptoms: ["Sore throat"],
    testDate: "12/03/2020",
    testInfo: "Active Infection",
    testStatus: "wait",
    verified: false,
    id: 1,
  },
];

function App() {
  const [dataMemory, setDataMemory] = useState(initialData); //used as persistent memory for for dummy data and form entry data
  const [loggedIn, setLoggedIn] = useState(false);
  const [lastClicked, setLastClicked] = useState("info");
  const [currentPage, setCurrentPage] = useState(
    <Info
      className="OverallForm"
      dataMemory={dataMemory}
      setDataMemory={setDataMemory}
    />
  );
  const adminLoggedIn = (
    <Admin
      dataMemory={dataMemory}
      setDataMemory={setDataMemory}
      setCurrentPage={setCurrentPage}
      refreshPage={refreshPage}
    />
  );
  function refreshPage() {
    setCurrentPage(
      <Info
        className="OverallForm"
        dataMemory={dataMemory}
        setDataMemory={setDataMemory}
      />
    );
    setLastClicked("info");
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("submitLogin").disabled = true;
    document.getElementById("submitErrors").style.display = "none";

    let selectedValues = {
      userId: document.getElementById("userId").value,
      password: document.getElementById("password").value,
    };
    sleep(800).then(() => {
      document.getElementById("submitLogin").disabled = false;
      if (
        selectedValues.userId === "admin" &&
        selectedValues.password === "covid19"
      ) {
        setLoggedIn(true);
        setCurrentPage(adminLoggedIn);
      } else {
        document.getElementById("submitErrors").style.display = "block";
      }
    });
  };
  const adminLoginForm = (
    <div className="LoginPage">
      <h1 className="FormHeader">Login to view Admin Page</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup legendText="">
          <TextInput
            id="userId"
            invalidText="Please enter your user ID."
            labelText="User ID"
            required
          />
        </FormGroup>
        <FormGroup legendText="">
          <TextInput
            id="password"
            type="password"
            invalidText="A password is required."
            labelText="Password"
            required
          />
        </FormGroup>
        <p
          kind="error"
          id="submitErrors"
          title="Login failed"
          className="SmallNotification"
        >
          <span>Invalid Login Credentials. Please try again!</span>
        </p>
        <Button
          kind="secondary"
          tabIndex={0}
          type="submit"
          id="submitLogin"
          className="SubmitBtn"
        >
          Log In
        </Button>
      </Form>
    </div>
  );

  return (
    <div className="App">
      <header>
        <div className="HeaderSection">
          <h1 className="HeaderTitle">COVID-CT</h1>
        </div>
        <nav className="NavBar">
          <ul className="NavEntry">
            <li className="NavList">
              <a
                href="#form"
                className={
                  lastClicked === "form"
                    ? "NavButton ActiveNavButton"
                    : "NavButton"
                }
                onClick={() => {
                  setCurrentPage(
                    <CTForm
                      className="OverallForm"
                      dataMemory={dataMemory}
                      setDataMemory={setDataMemory}
                    />
                  );
                  setLastClicked("form");
                }}
              >
                Form Page
              </a>
            </li>
            <li className="NavList">
              <a
                href="#info"
                className={
                  lastClicked === "info"
                    ? "NavButton ActiveNavButton"
                    : "NavButton"
                }
                onClick={() => {
                  setCurrentPage(
                    <Info
                      className="OverallForm"
                      dataMemory={dataMemory}
                      setDataMemory={setDataMemory}
                    />
                  );
                  setLastClicked("info");
                }}
              >
                Info Page
              </a>
            </li>
            <li className="NavList">
              <a
                href="#admin"
                className={
                  lastClicked === "admin"
                    ? "NavButton ActiveNavButton"
                    : "NavButton"
                }
                onClick={() => {
                  setCurrentPage(loggedIn ? adminLoggedIn : adminLoginForm);
                  setLastClicked("admin");
                }}
              >
                Admin Page
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {currentPage}
    </div>
  );
}

export default App;
