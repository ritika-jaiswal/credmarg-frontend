
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const EmailForm = () => {
  const [vendorEmail, setVendorEmail] = useState('');

  const handleChange = (e) => {
    setVendorEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/vendors');
      const vendor = response.data.find(v => v.email === vendorEmail);

      if (vendor) {
        const emailData = {
          recipient: vendor.email,
          msgBody: `Sending payments to vendor ${vendor.name} at UPI ${vendor.upi}`,
          subject: 'Payment Notification'
        };

        await axios.post('http://localhost:8080/sendMail', emailData);
        alert('Email sent successfully');
        setVendorEmail('');
      } else {
        alert('Vendor not found');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
  };

  return (
    <Box className="mb-8">
      <Typography variant="h3" className="text-2xl font-bold py-4" sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>Send Email to Vendor</Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField fullWidth type="email" label="Vendor Email" value={vendorEmail} onChange={handleChange} required />
        <Button variant="contained" type="submit">Send Email</Button>
      </form>
    </Box>
  );
};

export default EmailForm;
