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
      <button
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
      </button>
      <button
        onClick={() =>
          setCurrentPage(<Info 
            dataMemory={dataMemory}
            adminVerifiedMemory={adminVerifiedMemory}
            setAdminVerifiedMemory={setAdminVerifiedMemory} />)
        }
      >
        Info Page
      </button>
      <button
        onClick={() =>
          setCurrentPage(
            <Admin
              dataMemory={dataMemory}
              adminVerifiedMemory={adminVerifiedMemory}
              setAdminVerifiedMemory={setAdminVerifiedMemory}
            />
          )
        }
      >
        Admin Page
      </button>
      {currentPage}
    </div>
  );
}

export default App;
