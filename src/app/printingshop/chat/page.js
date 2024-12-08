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
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#2c3e50' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
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
          <Link href="/printingshop/profile" passHref>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link href="/printingshop/chat" passHref>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </Link>

          <Link href="/printingshop/orders" passHref>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white', display: 'flex' }}>
        <Box
          sx={{
            width: '30%',
            borderRight: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}>
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
                  primaryTypographyProps={{ fontWeight: 'bold', color: 'black' }}
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
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {selectedChat ? selectedChat.name : 'Select a chat'}
            </Typography>
            <Divider />
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
            {selectedChat ? (
              chatMessages.length > 0 ? (
                chatMessages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: msg.sender === 'me' ? 'right' : 'left',
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        backgroundColor: msg.sender === 'me' ? '#1E88E5' : '#ccc',
                        color: msg.sender === 'me' ? 'white' : 'black',
                      }}
                    >
                      {msg.text}
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  No messages yet.
                </Typography>
              )
            ) : (
              <Typography variant="body2" sx={{ color: 'gray' }}>
                Please select a chat to start messaging.
              </Typography>
            )}
          </Box>

          {selectedChat && (
            <Box sx={{ display: 'flex' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                color="success"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                sx={{
                  backgroundColor: '#4caf50', // green success button
                  '&:hover': {
                    backgroundColor: '#388e3c', // darker green on hover
                  },
                }}
              >
                Send
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
