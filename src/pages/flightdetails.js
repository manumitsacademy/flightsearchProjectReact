import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom';
import { CustomTableRow } from '../components/common/tableRow.js';
import { CustomTablePagination } from '../components/common/pagination.js';
import { CustomTableBody } from '../components/common/customTableBody.js';

const columns = [
    { id: 'FlightNumber', label: 'Flight Number', minWidth: 170 },
    { id: 'AirlineName', label: 'Airline', minWidth: 100 },
    { id: 'Departure', label: 'Departure Time', minWidth: 100 },
    { id: 'Arrival', label: 'Arrival Time', minWidth: 100 },
    { id: 'Duration', label: 'Duration', minWidth: 100 },
    { id: 'Stops', label: 'No. Of Stops', minWidth: 100 },
    { id: 'Price', label: 'Price', minWidth: 100 },
];

export class FlightDetails extends React.Component {
    componentWillMount() {
        this.props.resetSchedules();
    }
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 4
        };
    }
    render() {
        return (
            <>
            
                <Paper style={{ width: '100%', padding: 40, }}>
                    <TableContainer style={{ maxHeight: 440, }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <CustomTableRow columns={columns} />
                            </TableHead>
                            {
                                this.props.schedules.length?(
                                    <CustomTableBody
                                                schedules={this.props.schedules}
                                                page={this.state.page}
                                                rowsPerPage={this.state.rowsPerPage}
                                                columns={columns} />
                                ):(
                                    <div className="row bg-light" style={{ marginTop: 25 }}>
                                        <button class="btn btn-primary" disabled>
                                            <span class="spinner-border  spinner-border-sm"></span>
                                            Loading..
                                        </button>
                                    </div>
                                )
                            }
                            
                        </Table>
                    </TableContainer>
                    <CustomTablePagination
                        schedules={this.props.schedules.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        handleChangePage={this.handleChangePage}
                    />
                    <Link to="/">Modify Search</Link>
                </Paper>
            </>
        );
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };
}