import React from "react";
import "./AdminPage.scss";
import ReportTable from "../ReportTable";

const AdminPage = (props) => {
  return (
    <div>
      <div className="AdminPage">
            <h1 className="FormHeader">
              Test Admin Page
            </h1>
            <ReportTable data={props.dataMemory} />
      </div>
    </div>
  );
};
export default AdminPage;
