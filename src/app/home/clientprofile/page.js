"use client";
import React from "react";
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
  Button,
  Card,
  CardContent,
  Divider,
  CardActions,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import CameraIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/Photo";
import PinIcon from "@mui/icons-material/PushPin";

const PostInput = () => (
  <div className="bg-white shadow-sm rounded-lg p-4 mb-6 mx-auto max-w-md">
    <div className="flex items-center space-x-4">
      <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" className="h-10 w-10" />
      <div className="flex-grow bg-gray-100 p-2 rounded-full">
        <input
          type="text"
          placeholder="What's on your mind, Charles?"
          className="bg-transparent w-full focus:outline-none text-gray-600"
        />
      </div>
    </div>
    <hr className="my-4 border-gray-300" />
    <div className="flex justify-center items-center mt-2 space-x-2">
      <IconButton aria-label="upload photo" color="primary">
        <PhotoIcon fontSize="small" className="text-green-600" />
      </IconButton>
      <Typography variant="body2" className="text-black font-semibold cursor-pointer">
        Photo
      </Typography>
    </div>
  </div>
);

const PostCard = ({ postContent, postDate, postImage }) => (
  <Card variant="outlined" className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
    <CardContent>
      <div className="flex items-center mb-2">
        <Avatar src="/static/images/avatar/1.jpg" alt="User Avatar" className="mr-3" />
        <div>
          <Typography variant="body1" className="font-semibold">Charles Lee</Typography>
          <Typography variant="body2" color="textSecondary">{postDate}</Typography>
        </div>
      </div>
      <Typography variant="body2" className="mb-2">{postContent}</Typography>
      {postImage && (
        <div className="my-3">
          <img src={postImage} alt="Post Image" className="rounded-lg w-full object-cover" style={{ maxHeight: '200px' }} />
        </div>
      )}
    </CardContent>
    <Divider />
    <CardActions className="flex justify-between">
      <Button startIcon={<PinIcon />} size="small" sx={{ color: "green" }}>Pin Post</Button>
      <Button startIcon={<EditIcon />} size="small" color="primary">Edit Post</Button>
      <Button startIcon={<DeleteIcon />} size="small" sx={{ color: "red" }}>Move to trash</Button>
    </CardActions>
  </Card>
);

const MainContent = () => (
  <div className="ml-48 mt-16 p-8 bg-gray-50">
    <div className="relative mb-6">
      <div className="relative h-72 w-full">
        <img src="https://timelinecovers.pro/facebook-cover/download/beautiful_sunset-facebook-cover.jpg" alt="cinema background" className="object-cover w-full h-full rounded-t-lg" />
      </div>
      <div className="flex justify-end mt-4 pr-4">
        <Button variant="contained" color="primary" startIcon={<CameraIcon />}>
          Edit cover photo
        </Button>
      </div>
      <div className="absolute left-3 -bottom-14 flex items-center">
        <Avatar
          alt="Charles Lee"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 120, height: 120, border: '3px solid white' }}
          className="shadow-lg"
        />
      </div>
    </div>
    <div className="flex items-center mb-4" style={{ marginLeft: '140px', marginTop: '20px' }}>
      <div>
        <Typography variant="h5" className="font-bold" style={{ color: "black" }}>Charles Lee</Typography>
      </div>
      <div className="ml-auto mr-8" style={{ marginTop: '10px' }}>
        <Button variant="outlined" startIcon={<EditIcon />} color="primary">
          Edit profile
        </Button>
      </div>
    </div>
    <PostInput />
    <div className="mt-6">
      <Typography variant="h6" className="mb-4" style={{ marginLeft: '210px' }}>Posts</Typography>
      <PostCard 
        postContent="I need a custom T-shirt design for our upcoming family reunion. Interested designers, please message me with your ideas and portfolio."
        postDate="September 15, 2024"
      />
      <PostCard 
        postContent="Seeking a creative designer to develop a vibrant and eye-catching flyer for a community event. Contact me if you have relevant experience."
        postDate="September 15, 2024"
        postImage="https://via.placeholder.com/400x200?text=Community+Outreach"
      />
    </div>
  </div>
);

const ClientProfile = () => (
  <div>
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#7ab6ff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "black" }}>
          <span style={{ color: "#FFEB3B" }}>Cus</span><span style={{ color: "#FFEB3B" }}>tMe</span>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="Profile" src="/assets/image/artcat.jpg" />
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
            backgroundColor: "#1E88E5",
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
  </div>
);

export default ClientProfile;
