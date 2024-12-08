"use client";

import React, { useState } from 'react';
import Link from "next/link";
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
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const initialOrders = [
  { id: 1, name: 'John Doe', totalOrder: 5, date: '2024-09-20' },
  { id: 2, name: 'Jane Smith', totalOrder: 3, date: '2024-09-21' },
  { id: 3, name: 'Alice Johnson', totalOrder: 7, date: '2024-09-22' },
  { id: 4, name: 'Mark Williams', totalOrder: 4, date: '2024-09-23' },
  { id: 5, name: 'Sophia Brown', totalOrder: 2, date: '2024-09-24' },
  { id: 6, name: 'Lucas Green', totalOrder: 6, date: '2024-09-25' },
  { id: 7, name: 'Emma Davis', totalOrder: 8, date: '2024-09-26' },
  { id: 8, name: 'Michael Scott', totalOrder: 10, date: '2024-09-27' },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders] = useState(initialOrders);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAccept = (id) => {
    console.log(`Order ${id} accepted`);
  };

  const handleReject = (id) => {
    console.log(`Order ${id} rejected`);
  };

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
              <NotificationsIcon sx={{ color: '#FFD700' }} />
            </IconButton>
            <Avatar alt="Profile" src="/assets/image/profilepic.jpg" />
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
            backgroundColor: '#2c3e50',
            color: 'white',
          },
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
          <Link href="/printingshop/profile" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: 'white' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
            </ListItem>
          </Link>

          <Link href="/printingshop/chat" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: 'white' }}>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" sx={{ color: 'white' }} />
            </ListItem>
          </Link>

          <Link href="/printingshop/orders" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: 'white' }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ color: 'white' }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#34495e' }}>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
            Orders
          </Typography>
          <TextField
            variant="outlined"
            label="Search by Customer Name"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: 'white', borderRadius: 1, width: 300 }}
          />
        </Box>

        <Table sx={{ backgroundColor: '#34495e' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #FFD700', color: 'white' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #FFD700', color: 'white' }}>Customer Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: '2px solid #FFD700', color: 'white' }}>Total Order</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #FFD700', color: 'white' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #FFD700', color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell sx={{ color: 'white' }}>{order.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.name}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{order.totalOrder}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.date}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" onClick={() => handleAccept(order.id)} sx={{ mr: 1 }}>
                    Accept
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleReject(order.id)}>
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Home;
