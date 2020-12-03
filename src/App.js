import React, { useState } from "react";
import "./App.scss";
import Form from "./components/EntryForm";
import Info from "./components/InfoPage";
import Admin from "./components/AdminPage";

const initialData = [
  {
    'additional': "Asthmatic",
    'cwid': "123-45-6789",
    'exposure': "No",
    'fullname': "Annie Pearson",
    'location': "11/30/2020",
    'status': "Student",
    'symptoms': ["Cold/Cough"],
    'testDate': "",
    'testInfo': "Antibody",
    'testStatus': "wait"
  }
];

function App() {
  const [dataMemory, setDataMemory] = useState(initialData); //used as persistent memory for for dummy data and form entry data
  const [adminVerifiedMemory, setAdminVerifiedMemory] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    <Form
      className="OverallForm"
      dataMemory={dataMemory}
      setDataMemory={setDataMemory}
    />
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
              <a href="#form" className="NavButton"
                onClick={() =>
                  setCurrentPage(
                    <Form
                      className="OverallForm"
                      dataMemory={dataMemory}
                      setDataMemory={setDataMemory}
                    />
                  )
                }
              >
                Form Page
              </a>
            </li>
            <li className="NavList">
              <a href="#info" className="NavButton"
                onClick={() =>
                  setCurrentPage(
                    <Info
                      className="OverallForm"
                      dataMemory={dataMemory}
                      setDataMemory={setDataMemory}
                    />
                  )
                }
              >
                Info Page
              </a>
            </li>
            <li className="NavList">
              <a href="#admin" className="NavButton"
                onClick={() =>
                  setCurrentPage(
                    <Admin
                      className="OverallForm"
                      dataMemory={dataMemory}
                      setDataMemory={setDataMemory}
                    />
                  )
                }
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
