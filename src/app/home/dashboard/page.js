"use client";

import React, { useState } from "react";
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
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  IconButton as MuiIconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const items = [
  { src: "/assets/image/artist1.jpg", title: "Item 1", subtitle: "Zelma Diana" },
  { src: "/assets/image/artist2.jpg", title: "Item 2", subtitle: "Perrine Gerda" },
  { src: "/assets/image/artist3.jpg", title: "Item 3", subtitle: "Perrine Gerda" },
  { src: "/assets/image/artist4.jpg", title: "Item 4", subtitle: "Artist Name" },
  { src: "/assets/image/artist5.jpg", title: "Item 5", subtitle: "Artist Name" },
];

const printingShops = [
  { src: "/assets/image/print1.jpg", title: "Shop 1", subtitle: "Print Master" },
  { src: "/assets/image/print2.jpg", title: "Shop 2", subtitle: "Quick Print" },
  { src: "/assets/image/print3.jpg", title: "Shop 3", subtitle: "Design & Print" },
  { src: "/assets/image/print4.jpg", title: "Shop 4", subtitle: "Print Hub" },
  { src: "/assets/image/print5.jpg", title: "Shop 5", subtitle: "Creative Prints" },
];

function SelectionCarousel({ items, handleNext, handlePrevious, currentIndex }) {
  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "-40px", marginRight: "50px" }}>
      <IconButton onClick={handlePrevious} aria-label="previous" sx={{ mr: 1, color: "#FFD700" }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Grid container spacing={2}>
          {visibleItems.map((item, index) => (
            <Grid item xs={4} sm={4} key={index}>
              <Paper sx={{ p: 2, boxShadow: 3, textAlign: "center", backgroundColor: "#2c3e50", color: "#ecf0f1" }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="subtitle1" fontWeight="bold" mt={1} sx={{ color: "#FFD700" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <IconButton onClick={handleNext} aria-label="next" sx={{ ml: 1, color: "#FFD700" }}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
}

function Timeline() {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "#ecf0f1" }}>
        Your Post
      </Typography>

      <Paper sx={{ p: 1, mb: 2, boxShadow: 3, backgroundColor: "#34495e" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar alt="User Profile" src="/assets/image/profilepic.jpg" sx={{ mr: 2 }} />
          <Box sx={{ ml: "auto" }}>
            <MuiIconButton sx={{ color: "#FFD700" }}>
              <EditIcon />
            </MuiIconButton>
            <MuiIconButton sx={{ color: "red" }}>
              <DeleteIcon />
            </MuiIconButton>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: "#ecf0f1" }}>
          Looking for a designer to create custom artwork for my new website. Interested designers, please share your portfolio and availability.
        </Typography>
      </Paper>

      {/* Repeat this Paper component for other posts */}
    </Box>
  );
}

function Home() {
  const [artistIndex, setArtistIndex] = useState(0);
  const [shopIndex, setShopIndex] = useState(0);

  const handleArtistPrevious = () => {
    setArtistIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 3
    );
  };

  const handleArtistNext = () => {
    setArtistIndex((prevIndex) =>
      prevIndex + 3 >= items.length ? 0 : prevIndex + 3
    );
  };

  const handleShopPrevious = () => {
    setShopIndex((prevIndex) =>
      prevIndex === 0 ? printingShops.length - 3 : prevIndex - 3
    );
  };

  const handleShopNext = () => {
    setShopIndex((prevIndex) =>
      prevIndex + 3 >= printingShops.length ? 0 : prevIndex + 3
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#2c3e50" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "white" }}>
            <span style={{ color: "#FFD700" }}>Cus</span>
            <span style={{ color: "#FFD700" }}>tMe</span>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: "border-box",
            backgroundColor: "#2c3e50",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <List>
          <Link href="/home/dashboard" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: "white" }} />
            </ListItem>
          </Link>
          <Link href="/designer/chat" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" sx={{ color: "white" }} />
            </ListItem>
          </Link>
          <Link href="/home/mypurchase" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="My Purchase" sx={{ color: "white" }} />
            </ListItem>
          </Link>
          <Link href="/home/designerprofile" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <DesignServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Designer" sx={{ color: "white" }} />
            </ListItem>
          </Link>
          <Link href="/printingshop/orders" passHref>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <PrintIcon />
              </ListItemIcon>
              <ListItemText primary="Printing Orders" sx={{ color: "white" }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#34495e",
          padding: 3,
          marginTop: 8,
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          Artists
        </Typography>
        <SelectionCarousel
          items={items}
          handlePrevious={handleArtistPrevious}
          handleNext={handleArtistNext}
          currentIndex={artistIndex}
        />
        <Typography variant="h6" sx={{ color: "white", marginTop: 3 }}>
          Printing Shops
        </Typography>
        <SelectionCarousel
          items={printingShops}
          handlePrevious={handleShopPrevious}
          handleNext={handleShopNext}
          currentIndex={shopIndex}
        />
        <Timeline />
      </Box>
    </Box>
  );
}

export default Home;
