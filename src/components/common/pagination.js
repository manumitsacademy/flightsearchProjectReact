import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';


export const CustomTablePagination = (props) => {
    return (
        <TablePagination
            rowsPerPageOptions={[4]}
            component="div"
            count={props.schedules}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onChangePage={props.handleChangePage}
        />
    );
}