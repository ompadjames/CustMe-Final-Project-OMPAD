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
  Button,
  Divider,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const contacts = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Can you send the files?' },
  { id: 3, name: 'Alice Johnson', lastMessage: 'Thank you!' },
];

function Home() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatSelect = (id) => {
    const contact = contacts.find((c) => c.id === id);
    setSelectedChat(contact);
    setChatMessages([]); 
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'me' }]);
      setMessage('');
    }
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
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="Profile" src="/assets/image/profilepic.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#2c3e50', color: 'white' },
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

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#34495e', display: 'flex' }}>
        <Box
          sx={{
            width: '30%',
            borderRight: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#FFD700' }}>
            Chats
          </Typography>
          <List>
            {contacts.map((contact) => (
              <ListItem
                button
                key={contact.id}
                onClick={() => handleChatSelect(contact.id)}
                selected={selectedChat?.id === contact.id}
              >
                <ListItemText
                  primary={contact.name}
                  secondary={contact.lastMessage}
                  primaryTypographyProps={{ fontWeight: 'bold', color: '#ecf0f1' }}
                  secondaryTypographyProps={{ color: '#bdc3c7' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            p: 2,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
              {selectedChat ? selectedChat.name : 'Select a chat'}
            </Typography>
            <Divider />
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {chatMessages.map((msg, index) => (
              <Box key={index} sx={{ textAlign: msg.sender === 'me' ? 'right' : 'left', mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: msg.sender === 'me' ? '#FFD700' : '#ecf0f1',
                    color: msg.sender === 'me' ? '#2c3e50' : '#34495e',
                    display: 'inline-block',
                    padding: '8px 12px',
                    borderRadius: '16px',
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              sx={{
                backgroundColor: '#ecf0f1',
                borderRadius: 2,
                mr: 1,
              }}
            />
            <Button
              onClick={handleSendMessage}
              variant="contained"
              sx={{
                backgroundColor: '#FFD700',
                color: '#2c3e50',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: '#e67e22',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
