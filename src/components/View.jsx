import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead><br/><br/>
                    <TableRow>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Age</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Dept</TableCell>
                        <TableCell sx={{ fontWeignt: 'bold' }}>Salary</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View