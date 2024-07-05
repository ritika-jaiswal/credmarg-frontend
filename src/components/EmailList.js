
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getAllEmails')
      .then(response => setEmails(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box>
    <Typography variant="h4" component="h2" gutterBottom sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>
    Email List
  </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: '600'}}>Recipient</TableCell>
            <TableCell sx={{fontWeight: '600'}}>Subject</TableCell>
            <TableCell sx={{fontWeight: '600'}}>Message Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emails.map(email => (
            <TableRow key={email.id}>
              <TableCell>{email.recipient}</TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell>{email.msgBody}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default EmailList;
