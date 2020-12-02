import React, { useState } from "react";
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  } from 'carbon-components-react';
//import "./ReportTable.scss";


/*
 fullname: document.getElementById("fullname").value,
      cwid: document.getElementById("cwid").value,
      location: document.getElementById("oncampus-when").value,
      status: document.getElementById("department").value,
      testStatus: testStatus,
      additional: document.getElementById("additional").value,
      testInfo: "",
      testDate: "",
      symptoms: "",
      exposure:
*/

const headers = [
    {
        key: 'fullName',
        header:'Name'
    },
    {
        key: 'cwid',
        header:'CWID'
    },
    {
        key: 'location',
        header:'Location'
    },
    {
        key: 'status',
        header:'Status'
    },
    {
        key: 'testStatus',
        header:'Test Status'
    },
    {
        key: 'additional',
        header:'Additional Information'
    },
    {
        key: 'testInfo',
        header:'Test Info'
    },
    {
        key: 'testDate',
        header:'Test Date'
    },
    {
        key: 'symptoms',
        header:'Symptoms'
    },
    {
        key: 'exposure',
        header:'Exposure'
    },

]

const ReportTable = (props) => {
  return (
    <div>
      <div className="ReportTable">
        <DataTable rows={props.data} headers={headers}>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                <Table {...getTableProps()}>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow {...getRowProps({ row })}>
                            {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            )}
        </DataTable>
      </div>
    </div>
  );
};

export default ReportTable;