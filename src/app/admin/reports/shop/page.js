"use client";

import React, { useState } from 'react';
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
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrintIcon from '@mui/icons-material/Print';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const clients = [
  {
    id: 1,
    name: "John Doe",
    report: "Completed 5 designs",
    rating: 4.5,
    feedback: "Great designs and attention to detail.",
    transactions: [
      { id: 12345, date: '2024-09-01', amount: 500, status: 'Completed' },
      { id: 12346, date: '2024-09-15', amount: 300, status: 'Pending' },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    report: "Requested 2 revisions",
    rating: 3.8,
    feedback: "Good work but needed a few changes.",
    transactions: [
      { id: 12347, date: '2024-09-10', amount: 200, status: 'Completed' },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    report: "Pending approval for 1 design",
    rating: 4.0,
    feedback: "Quick response time, overall satisfied.",
    transactions: [
      { id: 12348, date: '2024-09-12', amount: 400, status: 'Completed' },
    ],
  },
  {
    id: 4,
    name: "Michael Brown",
    report: "Delivered final product",
    rating: 4.7,
    feedback: "Amazing job! Will work together again.",
    transactions: [
      { id: 12349, date: '2024-09-20', amount: 600, status: 'Completed' },
    ],
  },
  {
    id: 5,
    name: "Emily Davis",
    report: "Needs further modifications",
    rating: 3.5,
    feedback: "The design is okay but needs improvements.",
    transactions: [
      { id: 12350, date: '2024-09-22', amount: 150, status: 'Pending' },
    ],
  },
  {
    
    id: 6,
    name: "Chris Wilson",
    report: "Waiting for feedback",
    rating: 4.2,
    feedback: "Looking forward to finalizing the design.",
    transactions: [
      { id: 12351, date: '2024-09-24', amount: 250, status: 'Completed' },
    ],
  },
];

const chartData = {
  labels: clients.map(client => client.name),
  datasets: [
    {
      label: 'Client Ratings',
      data: clients.map(client => client.rating),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      max: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Client Ratings',
    },
  },
};

function Home() {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white', height: '100vh' }}>
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
      <Box component="main" sx={{ flexGrow: 5, p: 9, display: 'flex', gap: 2 }}>
        <Toolbar />
        <Box sx={{ width: '50%', maxHeight: 'calc(4 * 180px)', overflowY: 'scroll', marginLeft:'-100px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 3, color: 'black' }}>
            Shop Reports
          </Typography>

          {clients.map((client) => (
            <Paper key={client.id} sx={{ padding: 2, marginBottom: 2, boxShadow: 3 }} onClick={() => handleClientSelect(client)}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold">{client.name}</Typography>
                <Typography variant="body1" sx={{ color: 'gray' }}>{client.report}</Typography>
                <Typography variant="body2" sx={{ color: 'blue', fontStyle: 'italic' }}>{client.feedback}</Typography>
                <Rating value={client.rating} precision={0.5} readOnly sx={{ marginTop: 1 }} />
              </Box>
            </Paper>
          ))}
        </Box>

        <Box sx={{ width: '50%', backgroundColor: '#f0f0f0', padding: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2, color: 'black' }}>
            Shop Rating Comparison
          </Typography>
          <Bar data={chartData} options={chartOptions} />

          {selectedClient && (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 1, color: 'black' }}>
                Transaction Report for {selectedClient.name}
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Transaction ID</strong></TableCell>
                      <TableCell><strong>Date</strong></TableCell>
                      <TableCell><strong>Amount</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedClient.transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>${transaction.amount}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
