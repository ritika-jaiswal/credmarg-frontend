import React from 'react';
import { Box, Typography } from '@mui/material';
import EmployeeList from './EmployeeList';
import VendorList from './VendorList';
import EmailList from './EmailList';

const AdminPanel = () => {
  return (
    <Box
      className="h-screen flex flex-col items-center bg-cover bg-center"
    >
    <Typography
        variant="h3"
        className="text-4xl font-bold text-black py-10"
        sx={{
          animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        Credmarg Admin Panel
      </Typography>
      <Box className="py-5 w-full flex flex-col gap-6">
        <EmployeeList />
        <VendorList />
        <EmailList />
      </Box>
    </Box>
  );
};

export default AdminPanel;
