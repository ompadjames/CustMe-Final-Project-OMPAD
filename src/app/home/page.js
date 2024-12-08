"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";

const TeamMember = ({ image, name, role, details, socials }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader
        avatar={
          <Box
            component="img"
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full"
          />
        }
        title={<Typography className="font-bold">{name}</Typography>}
        subheader={<Typography className="text-gray-500">{role}</Typography>}
      />
      <CardContent>
        <Typography className="mb-4">{details}</Typography>
        <Grid container spacing={1} justifyContent="center">
          {socials.map((social, index) => (
            <Grid item key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const MeetOurTeam = () => {
  const teamMembers = [
    {
      image: "https://images.stockcake.com/public/8/7/5/875ad5c1-9c97-4860-9dff-1364d972c031_large/futuristic-digital-face-stockcake.jpg",
      name: "Alex Smith",
      role: "Designer",
      details: "Responsible for creating visually appealing designs for our clients.",
      socials: [
        { link: "#", icon: <i className="fab fa-facebook-f"></i> },
        { link: "#", icon: <i className="fab fa-twitter"></i> },
        { link: "#", icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: "https://images.stockcake.com/public/e/a/c/eac12d12-8062-4711-b1c0-8fe7a083959b_large/artistic-face-paint-stockcake.jpg",
      name: "May Brown",
      role: "Designer",
      details: "Specializes in user interface design and ensuring a seamless user experience.",
      socials: [
        { link: "#", icon: <i className="fab fa-facebook-f"></i> },
        { link: "#", icon: <i className="fab fa-twitter"></i> },
        { link: "#", icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: "https://images.stockcake.com/public/0/7/4/074a4be3-350b-41a2-aea6-930278c53b93_large/artistic-youthful-gaze-stockcake.jpg",
      name: "Ann Richmond",
      role: "Designer",
      details: "Responsible for assisting and maintaining the client’s desired designs.",
      socials: [
        { link: "#", icon: <i className="fab fa-facebook-f"></i> },
        { link: "#", icon: <i className="fab fa-twitter"></i> },
        { link: "#", icon: <i className="fab fa-instagram"></i> },
      ],
    },
    {
      image: "https://images.stockcake.com/public/7/0/1/70182bc8-02bf-4a5e-b839-cfc1aecd6b34_large/colorful-artistic-portrait-stockcake.jpg",
      name: "Roxie Swanson",
      role: "Printing Provider",
      details: "Handles all our printing needs and ensures high-quality, on-time deliveries.",
      socials: [
        { link: "#", icon: <i className="fab fa-facebook-f"></i> },
        { link: "#", icon: <i className="fab fa-twitter"></i> },
        { link: "#", icon: <i className="fab fa-instagram"></i> },
      ],
    },
  ];

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Typography variant="h4" align="center" gutterBottom className="text-black -mt-16">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} className="max-w-[1200px] w-full mt-10">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TeamMember
              image={member.image}
              name={member.name}
              role={member.role}
              details={member.details}
              socials={member.socials}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

function Home() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", ml: 2 }}>
          <span style={{ color: "#1976d2" }}>C</span>
          <span style={{ color: "#1976d2" }}>u</span>
          <span style={{ color: "#1976d2" }}>s</span>
          <span style={{ color: "#ffeb3b" }}>t</span>
          <span style={{ color: "#1976d2" }}>M</span>
          <span style={{ color: "#ffeb3b" }}>e</span>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ fontWeight: "medium", mr: 2 }}>Home</Typography>
          <Typography variant="body1" sx={{ fontWeight: "medium", mr: 2 }}>About</Typography>
          <Typography variant="body1" sx={{ fontWeight: "medium", mr: 2 }}>Services</Typography>
          <Button variant="contained" color="primary" href="home/register" sx={{ ml: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Paper
          sx={{
            padding: 4,
            width: 400,
            height: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            Personalize your world with
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold", mt: 1 }}>
            CusTMe
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
            Connect Designers and Printing providers
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: "#ffeb3b", color: "#000", mr: 2 }}>
              Sign Up
            </Button>
            <Button variant="outlined" sx={{ backgroundColor: "#ffffff", color: "#000" }}>
              Join
            </Button>
          </Box>
        </Paper>

        <Box sx={{ width: 400, height: 320, ml: 3 }}>
          <img
            src="/assets/image/artcat.jpg"
            alt="Your Image"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>
      </Box>
      <MeetOurTeam />
    </Box>
  );
}

export default Home;
