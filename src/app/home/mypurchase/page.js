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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";

const purchases = [
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Ready for pickup",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Processing",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Picked Up",
  },
];

function MainContent() {
  return (
    <Box
      sx={{
        marginLeft: "20px",
        marginTop: "64px",
        padding: 2,
        minHeight: "100vh",
        backgroundColor: "#1c2833", // Darker background for content area
        width: "calc(100% - 240px)",
      }}
    >
      <Typography variant="h5" gutterBottom color="white">
        My Purchases
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%", backgroundColor: "#2c3e50" }}>
        <Table aria-label="purchases table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottom: "2px solid #FFD700",
                  color: "#ecf0f1", // Gold text
                }}
              >
                Items
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottom: "2px solid #FFD700",
                  color: "#ecf0f1", // Gold text
                }}
              >
                Prices
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottom: "2px solid #FFD700",
                  color: "#ecf0f1", // Gold text
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottom: "2px solid #FFD700",
                  color: "#ecf0f1", // Gold text
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((purchase, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={purchase.image}
                      alt={purchase.item}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <Typography sx={{ color: "#ecf0f1" }}>{purchase.item}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "#ecf0f1" }}>{purchase.price}</TableCell>
                <TableCell sx={{ color: "#ecf0f1" }}>{purchase.quantity}</TableCell>
                <TableCell sx={{ color: "#ecf0f1" }}>{purchase.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Home() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#1c2833", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#34495e" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", color: "#FFD700" }} // Gold text
          >
            <span>Cus</span>
            <span>tMe</span>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsIcon sx={{ color: "#FFD700" }} /> {/* Gold icon */}
            </IconButton>
            <Avatar alt="Profile" src="/assets/image/profilepic.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#34495e", // Dark background for drawer
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
              <ListItemText primary="Printing Shops" sx={{ color: "white" }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <MainContent />
    </Box>
  );
}

export default Home;
