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
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const initialOrders = [
  { id: 1, orderNumber: 'ORD001', customer: 'John Doe', totalPrice: 150.00, date: '2024-09-20', paymentStatus: 'Paid' },
  { id: 2, orderNumber: 'ORD002', customer: 'Jane Smith', totalPrice: 75.50, date: '2024-09-21', paymentStatus: 'Pending' },
  { id: 3, orderNumber: 'ORD003', customer: 'Alice Johnson', totalPrice: 200.00, date: '2024-09-22', paymentStatus: 'Paid' },
  { id: 4, orderNumber: 'ORD004', customer: 'Mark Williams', totalPrice: 50.75, date: '2024-09-23', paymentStatus: 'Failed' },
  { id: 5, orderNumber: 'ORD005', customer: 'Sophia Brown', totalPrice: 120.00, date: '2024-09-24', paymentStatus: 'Paid' },
  { id: 6, orderNumber: 'ORD006', customer: 'Lucas Green', totalPrice: 90.25, date: '2024-09-25', paymentStatus: 'Pending' },
  { id: 7, orderNumber: 'ORD007', customer: 'Emma Davis', totalPrice: 130.00, date: '2024-09-26', paymentStatus: 'Paid' },
  { id: 8, orderNumber: 'ORD008', customer: 'Michael Scott', totalPrice: 250.00, date: '2024-09-27', paymentStatus: 'Paid' },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders] = useState(initialOrders);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#34495e' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#2c3e50' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
            <span style={{ color: '#FFD700' }}>Cus</span>
            <span style={{ color: '#FFD700' }}>tMe</span>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="Profile" src="/assets/image/profilepic.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box', backgroundColor: '#2c3e50', color: 'white' },
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 4 }}>
          <Avatar alt="Profile Picture" src="/assets/image/profilepic.jpg" sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="h6" fontWeight="bold" color="white">
            James Designer
          </Typography>
        </Box>
        <List>
          <Link href="/designer/dashboard" passHref>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link href="/designer/chat" passHref>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </Link>

          <Link href="/designer/orders" passHref>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#34495e' }}>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            Orders
          </Typography>
          <TextField
            variant="outlined"
            label="Search by Customer Name"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: '#ecf0f1', borderRadius: 1, width: 300 }}
          />
        </Box>

        <Table sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>Order Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>Customer</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>Total Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #2c3e50' }}>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell align="center">${order.totalPrice.toFixed(2)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Home;
