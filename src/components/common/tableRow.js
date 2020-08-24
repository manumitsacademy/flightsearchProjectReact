import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export const CustomTableRow = ({columns}) => {
    return (
        <TableRow>
            {columns.map(column => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}