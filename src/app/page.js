import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Paper,
} from '@mui/material';

function Home() {
  return (
    <Box className="min-h-screen bg-gray-100">
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#34495e', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', ml: 2 }}>
            <span className="text-yellow-500">C</span>
            <span className="text-yellow-500">u</span>
            <span className="text-yellow-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-yellow-500">M</span>
            <span className="text-yellow-500">e</span>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" variant="text">Home</Button>
            <Button color="inherit" variant="text">About</Button>
            <Button color="inherit" variant="text">Services</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          minHeight: 'calc(100vh - 64px)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#34495e', // Midnight Blue background
        }}
      >
        <Paper elevation={5} sx={{ padding: 4, maxWidth: 400, width: '100%', backgroundColor: 'white' }}>
          <Typography variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#003366' }}>
            Sign in to your account
          </Typography>

          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email address"
              margin="normal"
              required
              autoComplete="email"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              margin="normal"
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <Button variant="text" size="small" href="#" sx={{ marginRight: 1, color: '#003366' }}>
                    Forgot password?
                  </Button>
                ),
              }}
              sx={{ marginBottom: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/home/join"
              sx={{ marginTop: 2, backgroundColor: '#003366', '&:hover': { backgroundColor: '#002244' } }}
            >
              Sign in
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;
