import React, { Component } from "react";
import Admin from "../AdminPage";
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
        header:'Last On-Campus'
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
        key: 'verified',
        header: 'Verified'
    }
]

class ReportTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
      <div className="ReportTable">
        <DataTable rows={this.props.dataMemory} headers={headers} ref={this.tableElement}>
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
                {...getTableProps()}>
                {this.props.onAdminPage ?
                <TableToolbar>
                    <TableBatchActions {...getBatchActionProps()}>
                        <TableBatchAction
                            tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                            onClick={() => {
                                let res = this.props.dataMemory;
                                for(let key in selectedRows) {
                                    let row = res.find(x => x.id === selectedRows[key].id);
                                    res = res.filter(x => x.id !== selectedRows[key].id);
                                    row.verified = true;
                                    res.push(row);
                                    this.props.setDataMemory(res);
                                }
                                alert("Successfully verified selected cases. Redirecting you to the info page to confirm.");
                                this.props.refreshPage();
                            }}
                        >
                            Verify Selected Cases
                        </TableBatchAction>
                    </TableBatchActions>
                </TableToolbar>
                : null}
                <Table {...getTableProps()}>
                    <TableHead>
                    <TableRow>
                        {this.props.onAdminPage ? <TableHeader>Verify Case</TableHeader> : null}
                        {headers.map((header, i) => (
                        <TableHeader key={i} {...getHeaderProps({ header })}>
                            {header.header}
                        </TableHeader>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, i) => (
                        (!this.props.onAdminPage && row.cells[8].value) || this.props.onAdminPage ? (
                        <TableRow key={i} {...getRowProps({ row })}>
                        {this.props.onAdminPage ? <TableSelectRow {...getSelectionProps({ row })} /> : null}
                        {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{typeof cell.value === "boolean" ? cell.value.toString() : cell.value}</TableCell>
                        ))}
                        </TableRow>
                        ) : null
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            )}
            </DataTable>
      </div>
    </div>
        )
    }
}

export default ReportTable;