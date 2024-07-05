
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/employees', employee);
      alert('Employee added successfully');
      setEmployee({ name: '', designation: '', ctc: '', email: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to add employee');
    }
  };

  return (
    <Box className="mb-8">
      <Typography variant="h3" className="text-2xl font-bold py-4" sx={{animation: 'fadeIn 2s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }}}>Add Employee</Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField fullWidth label="Name" name="name" value={employee.name} onChange={handleChange} required />
        <TextField fullWidth label="Designation" name="designation" value={employee.designation} onChange={handleChange} required />
        <TextField fullWidth type="number" label="CTC" name="ctc" value={employee.ctc} onChange={handleChange} required />
        <TextField fullWidth type="email" label="Email" name="email" value={employee.email} onChange={handleChange} required />
        <Button variant="contained" type="submit">Add Employee</Button>
      </form>
    </Box>
  );
};

export default EmployeeForm;
