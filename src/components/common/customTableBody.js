
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


export const CustomTableBody = (props) => {
    return (
        <TableBody>
            {props.schedules.slice(props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage).map(row => {
                    return (
                        <TableRow hover tabIndex={-1} key={row.code}>
                            {props.columns.map(column => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
        </TableBody>
    );
}
