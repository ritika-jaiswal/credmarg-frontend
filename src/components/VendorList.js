
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/vendors')
      .then(response => setVendors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box >
         <Typography variant="h4" component="h2" gutterBottom sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>
        Vendor List
      </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: '600'}}>Name</TableCell>
            <TableCell sx={{fontWeight: '600'}}>Email</TableCell>
            <TableCell sx={{fontWeight: '600'}}>UPI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.map(vendor => (
            <TableRow key={vendor.email}>
              <TableCell>{vendor.name}</TableCell>
              <TableCell>{vendor.email}</TableCell>
              <TableCell>{vendor.upi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default VendorList;
