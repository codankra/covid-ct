import React, { useState } from "react";
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableContainer,
    TableToolbar,
    TableToolbarContent,
    TableToolbarAction,
    TableToolbarSearch,
    TableBatchActions,
    TableBatchAction,
    TableSelectAll,
    TableSelectRow
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
        key: 'fullname',
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
    }
]

const ReportTable = (props) => {
    console.log(props);
    return (
    <div>
      <div className="ReportTable">
        <DataTable rows={props.data} headers={headers}>
            {({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getToolbarProps,
                getBatchActionProps,
                onInputChange,
                selectedRows,
                getTableProps,
                getTableContainerProps
            }) => (
                <TableContainer
                title="DataTable"
                description="With batch actions"
                {...getTableProps()}>
                <TableToolbar>
                    <TableBatchActions {...getBatchActionProps()}>
                        <TableBatchAction
                            tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                            >
                            Verify
                        </TableBatchAction>
                    </TableBatchActions>
                    <TableToolbarContent>
                        <TableToolbarSearch
                            defaultExpanded
                            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                            onChange={onInputChange}
                        />
                    </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()}>
                    <TableHead>
                    <TableRow>
                        <TableSelectAll {...getSelectionProps()} />
                        {headers.map((header, i) => (
                        <TableHeader key={i} {...getHeaderProps({ header })}>
                            {header.header}
                        </TableHeader>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i} {...getRowProps({ row })}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            )}
            </DataTable>
      </div>
    </div>
  );
};

export default ReportTable;