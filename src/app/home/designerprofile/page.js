"use client";
import React, { useState } from 'react';
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Drawer,
  Card,
  CardContent,
  Collapse
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  Chat as ChatIcon,
  ShoppingCart as ShoppingCartIcon,
  Brush as BrushIcon,
  Print as PrintIcon,
  Message as MessageIcon,
  ArrowBackIos,
  ArrowForwardIos,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  StarHalf as StarHalfIcon,
  StarBorder as StarBorderIcon,
  DesignServices as DesignServicesIcon 
} from '@mui/icons-material';


const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} sx={{ color: '#FFD700' }} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<StarHalfIcon key={i} sx={{ color: '#FFD700' }} />);
    } else {
      stars.push(<StarBorderIcon key={i} sx={{ color: '#FFD700' }} />);
    }
  }

  return <Box sx={{ display: 'flex' }}>{stars}</Box>;
};

const PortfolioCarousel = () => {
  const images = [
    { src: '/assets/image/tshirt2.jpg', alt: 'Leveria' },
    { src: '/assets/image/tshirt3.jpg', alt: 'Arterial Coffee' },
    { src: '/assets/image/tshirt4.jpg', alt: 'Supastar' },
    { src: '/assets/image/tshirt5.jpg', alt: 'Blackburgh' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center">
      <IconButton onClick={handlePrev}>
        <ArrowBackIos />
      </IconButton>
      <div className="w-[600px] h-[400px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="h-full object-contain" />
      </div>
      <IconButton onClick={handleNext}>
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
};

const AboutMeCard = () => (
  <Card className="mb-6 w-full flex justify-center items-center" style={{ marginTop: '50px' }}>
    <CardContent>
      <div className="flex items-center justify-center mb-4">
        <BrushIcon className="mr-2" />
        <Typography variant="h6">About me</Typography>
      </div>

      <Typography variant="body1" className="mt-2">
        Skills: Logo Design, Illustration, Typography, Animation
      </Typography>

      <Typography variant="body2" className="mt-4 text-justify">
        Hello, I am a perfectionist having more than 10 years of professional experience specialized in minimalism and simplicity. Looking forward to working with you! Don't forget to SAVE my gig!
      </Typography>
    </CardContent>
  </Card>
);

const ReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mb-4 w-full">
      <CardContent>
        <div className="flex items-center mb-2">
          <Avatar alt="Jordan Smith" src="/assets/image/artist1.jpg" className="mr-2" />

          <div className="flex-grow">
            <Typography variant="subtitle1">Jordan Smith</Typography>
            <Typography variant="body2" color="textSecondary">2 months ago</Typography>
          </div>

          <StarRating rating={4} />
        </div>

        <Typography variant="body2" className="mt-2">
          Hello, I am a perfectionist having more than 10 years of professional experience specialized in minimalism and simplicity. Looking forward to working with you. Don't forget to SAVE my gig!!!
        </Typography>

        <Typography variant="body2" className="mt-2">
          Duration: 7 Days
        </Typography>

        <IconButton onClick={handleExpandClick} className="mt-2">
          <Avatar alt="Seller Response" src="/assets/image/artist2.jpg" className="mr-2" />
          <Typography variant="body2">Seller Response</Typography>
          <ExpandMoreIcon className={`ml-auto ${expanded ? 'rotate-180' : ''}`} />
        </IconButton>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              Thank you for your feedback! It was a pleasure working with you. I look forward to future collaborations!
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const ReviewsSection = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <Typography variant="h6" className="mb-4">Reviews</Typography>
    <ReviewCard />
  </div>
);

const MainContent = () => (
  <div className="flex-grow mt-16 p-8 bg-gray-50">
    <div className="relative mb-6">
      <div className="relative h-72 w-full">
        <img src="/assets/image/tshirt1.jpg" alt="cinema background" className="object-cover w-full h-full rounded-t-lg" />
      </div>

      <div className="absolute left-3 -bottom-14 flex items-center">
        <Avatar
          alt="Alex Johnson"
          src="/assets/image/artist3.jpg"
          sx={{ width: 120, height: 120, border: '3px solid white' }}
          className="shadow-lg"
        />
      </div>
    </div>

    <div className="flex items-center mb-4" style={{ marginLeft: '140px', marginTop: '-16px' }}>
      <div>
        <Typography variant="h5" className="font-bold" sx={{ color: 'black' }}>Alex Johnson</Typography>
        <div className="flex items-center mt-1">
          <Typography variant="body2" className="mr-1">4.8</Typography>
          <StarRating rating={4.8} />
        </div>
      </div>

      <div className="ml-auto mr-8">
        <Button
          variant="outlined"
          startIcon={<MessageIcon />}
          color="primary"
        >
          Message
        </Button>
      </div>
    </div>

    <div className="flex justify-between items-start mb-6">
      <div className="w-1/3 pr-4 flex justify-center">
        <AboutMeCard />
      </div>

      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h6" className="mb-4">Portfolio</Typography>
        <PortfolioCarousel />
      </div>
    </div>

    <ReviewsSection />
  </div>
);

const DesignerProfile = () => (
  <Box sx={{ display: "flex" }}>
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#34495e" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "black" }}>
          <span style={{ color: "#FFEB3B" }}>Cus</span>
          <span style={{ color: "#FFEB3B" }}>tMe</span>
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
      backgroundColor: "#34495e",
      color: "white",
    },
  }}
>
  <Toolbar />
  <List>
    {/* Loop through each item and create a link to its corresponding page */}
    {[
      { text: "Dashboard", icon: <DashboardIcon />, link: "/home/dashboard" },
      { text: "Chat", icon: <ChatIcon />, link: "/designer/chat" },
      { text: "My Purchase", icon: <ShoppingCartIcon />, link: "/home/mypurchase" },
      { text: "Designer", icon: <DesignServicesIcon />, link: "/home/designerprofile" },
      { text: "Printing Shops", icon: <PrintIcon />, link: "/printingshop/orders" }
    ].map((item) => (
      <Link href={item.link} passHref key={item.text}>
        <ListItem button>
          <ListItemIcon sx={{ color: "white" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ color: "white" }} />
        </ListItem>
      </Link>
    ))}
  </List>
</Drawer>

    <MainContent />
  </Box>
);

export default DesignerProfile;
