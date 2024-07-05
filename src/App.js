// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import EmployeeList from './components/EmployeeList';
import VendorList from './components/VendorList';
import EmailList from './components/EmailList';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Container className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/employees">Employees</Button>
            <Button color="inherit" component={Link} to="/vendors">Vendors</Button>
            <Button color="inherit" component={Link} to="/emails">Emails</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/"
            element={
              <AdminPanel />

            }
          />
          <Route
            path="/employees"
            element={
              <>
                <EmployeeForm />

              </>
            }
          />
          <Route
            path="/vendors"
            element={
              <>
                <VendorForm />

              </>
            }
          />
          <Route
            path="/emails"
            element={
              <>
                <EmailForm />

              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
