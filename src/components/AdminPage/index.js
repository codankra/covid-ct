import React, { useState } from "react";
import "./AdminPage.scss";
import ReportTable from "../ReportTable";

const AdminPage = (props) => {
  return (
    <div>
      <div className="AdminPage">
            <h1 className="FormHeader">
              Admin Page
            </h1>
            <ReportTable onAdminPage={true} dataMemory={props.dataMemory} setDataMemory={props.setDataMemory} refreshPage={props.refreshPage}/>
            <br/>
            <p>To verify a case, click the checkbox to the left of the case and then click 'Verify Selected Cases'.</p>
      </div>
    </div>
  );
};
export default AdminPage;
