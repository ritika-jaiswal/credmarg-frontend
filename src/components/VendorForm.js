
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const VendorForm = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    upi: ''
  });

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/vendors', vendor);
      alert('Vendor added successfully');
      setVendor({ name: '', email: '', upi: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to add vendor');
    }
  };

  return (
    <Box className="mb-8">
      <Typography variant="h3" className="text-2xl font-bold py-4" sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>Add Vendor</Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField fullWidth label="Name" name="name" value={vendor.name} onChange={handleChange} required />
        <TextField fullWidth type="email" label="Email" name="email" value={vendor.email} onChange={handleChange} required />
        <TextField fullWidth label="UPI" name="upi" value={vendor.upi} onChange={handleChange} required />
        <Button variant="contained" type="submit">Add Vendor</Button>
      </form>
    </Box>
  );
};

export default VendorForm;
