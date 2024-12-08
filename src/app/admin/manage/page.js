"use client";

import React from 'react';
import Link from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrintIcon from '@mui/icons-material/Print';

function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#34495e' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
            <span style={{ color: '#FFEB3B' }}>Cus</span>
            <span style={{ color: '#FFEB3B' }}>tMe</span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
      variant="permanent"
      sx={{
        width: 200,
        [`& .MuiDrawer-paper`]: {
          width: 200,
          boxSizing: 'border-box',
          backgroundColor: '#34495e',
          color: 'white',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Avatar alt="User Profile" src="/assets/image/profilepic.jpg" sx={{ width: 80, height: 80, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', textAlign: 'center' }}>
          James Ompad Admin
        </Typography>
      </Box>
      <List>
        <ListItem button component={Link} href="/admin/manage">
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Manage Account" />
        </ListItem>
        <ListItem button component={Link} href="/admin/reports">
          <ListItemIcon>
            <PrintIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Generate Report" />
        </ListItem>
      </List>
    </Drawer>


      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
        <Toolbar />
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Verified</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', verified: true },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', verified: false },
                { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', verified: true },
                { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'Printing Provider', verified: false },
                { id: 5, name: 'Charlie White', email: 'charlie@example.com', role: 'User', verified: true },
                { id: 6, name: 'Diana Black', email: 'diana@example.com', role: 'Printing Provider', verified: false },
                { id: 7, name: 'Emily Green', email: 'emily@example.com', role: 'Printing Provider', verified: true },
                { id: 8, name: 'Frank Gray', email: 'frank@example.com', role: 'Designer', verified: true },
                { id: 9, name: 'Grace Blue', email: 'grace@example.com', role: 'User', verified: false },
              ].map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.verified ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#00DE52', color: 'white', mr: 1 }}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#FF3243', color: 'white', mr: 1 }}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#FF3243', color: 'white', mr: 1 }}
                    >
                      Disable
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#00DE52', color: 'white' }}
                    >
                      Enable
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Home;
