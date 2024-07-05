
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box>
         <Typography variant="h4" component="h2" gutterBottom sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>
        Employee List
      </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: '600'}}>Name</TableCell>
            <TableCell sx={{fontWeight: '600'}}>Designation</TableCell>
            <TableCell sx={{fontWeight: '600'}}>CTC</TableCell>
            <TableCell sx={{fontWeight: '600'}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.email}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.ctc}</TableCell>
              <TableCell>{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default EmployeeList;
