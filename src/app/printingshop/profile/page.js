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
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const profileData = {
  name: 'James Shop',
  location: 'Lapu-Lapu City',
  bio: 'Designing the future, one print at a time.',
  contactNumber: '+63 912 345 6789',
  email: 'james.shop@example.com',
  profilePicture: '/assets/image/profilepic.jpg',
  coverPhoto: '/assets/image/printcover.jpg',
};

const collageData = [
  { image: '/assets/image/tshirt1.jpg', message: 'Customized T-shirt for a local brand.' },
  { image: '/assets/image/tshirt2.jpg', message: 'Minimalist design with eco-friendly fabric.' },
  { image: '/assets/image/tshirt3.jpg', message: 'Collaboration with a streetwear designer.' },
  { image: '/assets/image/tshirt4.jpg', message: 'Exclusive print for the summer collection.' },
  { image: '/assets/image/tshirt5.jpg', message: 'Graphic tees inspired by urban culture.' },
];

function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageMessage, setImageMessage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleMessageChange = (event) => {
    setImageMessage(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'white' }}>
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
            <Avatar alt="Profile" src={profileData.profilePicture} />
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

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ position: 'relative', mb: 6 }}>
              <img
                src={profileData.coverPhoto}
                alt="Cover"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <Avatar
                alt="Profile Picture"
                src={profileData.profilePicture}
                sx={{
                  width: 150,
                  height: 150,
                  position: 'absolute',
                  bottom: -75,
                  left: '2%',
                  border: '5px solid white',
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#2c3e50' }}>
                    {profileData.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">{profileData.bio}</Typography>
                  <Typography variant="body2" color="textSecondary">Location: {profileData.location}</Typography>
                  <Typography variant="body2" color="textSecondary">Contact: {profileData.contactNumber}</Typography>
                  <Typography variant="body2" color="textSecondary">Email: {profileData.email}</Typography>
                </Grid>

                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<MessageIcon />}
                    color="success"
                    sx={{ marginRight: 2, '&:hover': { backgroundColor: '#388e3c' } }}
                  >
                    Message
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    color="secondary"
                    sx={{ '&:hover': { backgroundColor: '#1976d2' } }}
                  >
                    Location
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <input
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="contained" component="span" color="success">
                Upload Image
              </Button>
            </label>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>Portfolio</Typography>
            <Grid container spacing={2}>
              {collageData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper sx={{ padding: 2 }}>
                    <Typography variant="body1" fontWeight="bold">{item.message}</Typography>
                    <img
                      src={item.image}
                      alt={`Collage ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginTop: 8,
                        transition: 'transform 0.2s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </Paper>
                </Grid>
              ))}

              {uploadedImage && (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ padding: 2 }}>
                    <Typography variant="body1" fontWeight="bold">{imageMessage || "Uploaded Image"}</Typography>
                    <img
                      src={uploadedImage}
                      alt="Uploaded Collage"
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginTop: 8,
                        transition: 'transform 0.2s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </Paper>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
