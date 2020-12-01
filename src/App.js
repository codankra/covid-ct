import React, { useState } from "react";
import "./App.scss";
import Form from "./components/EntryForm";
import Info from "./components/InfoPage";
import Admin from "./components/AdminPage";

function App() {
  const [currentPage, setCurrentPage] = useState(<Form className="OverallForm" />);
  return (
    <div className="App">
      <button onClick={() => setCurrentPage(<Form className="OverallForm" />)}>
        Form Page
      </button>
      <button onClick={() => setCurrentPage(<Info />)}>
        Info Page
      </button>
      <button onClick={() => setCurrentPage(<Admin />)}>
        Admin Page
      </button>
      {currentPage}
    </div>
  );
}

export default App;
