import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PrintIcon from '@mui/icons-material/Print';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white p-6 flex justify-between items-center shadow-lg">
        <div className="text-black font-extrabold text-5xl ml-8">
          <span className="text-[#003366]">C</span>
          <span className="text-[#003366]">u</span>
          <span className="text-[#003366]">s</span>
          <span className="text-yellow-600">t</span>
          <span className="text-[#003366]">M</span>
          <span className="text-yellow-600">e</span>
        </div>

        <div className="flex justify-end items-center space-x-8 text-lg font-semibold">
          <div className="text-black hover:text-[#003366] cursor-pointer transition-all duration-200">Home</div>
          <div className="text-black hover:text-[#003366] cursor-pointer transition-all duration-200">About</div>
          <div className="text-black hover:text-[#003366] cursor-pointer transition-all duration-200">Services</div>
        </div>
      </div>

      {/* Main Content */}
      <Container maxWidth="lg" className="flex items-center justify-center mt-16">
        <div className="bg-[#003366] p-8 rounded-xl shadow-lg w-full md:w-[700px] h-[420px]">
          <Typography variant="h4" className="font-bold text-center text-white mb-6">
            Join Our Community
          </Typography>
          <div className="flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 md:space-x-6">
            
            {/* I am a Designer Button */}
            <a href="/home/dashboard" className="w-full md:w-[45%]">
              <Button
                variant="contained"
                className="bg-white text-[#003366] rounded-lg shadow-lg hover:bg-gray-200 w-full h-full p-6 flex flex-col items-center justify-center transition-all duration-200 ease-in-out"
              >
                <DesignServicesIcon fontSize="inherit" className="text-5xl mb-4 text-[#003366]" />
                <Typography variant="h5" className="text-xl font-bold text-center text-gray-700">
                  I AM A DESIGNER
                </Typography>
              </Button>
            </a>

            {/* I am a Printing Provider Button */}
            <a href="/printingshop/profile" className="w-full md:w-[45%]">
              <Button
                variant="contained"
                className="bg-white text-[#003366] rounded-lg shadow-lg hover:bg-gray-200 w-full h-full p-6 flex flex-col items-center justify-center transition-all duration-200 ease-in-out"
              >
                <PrintIcon fontSize="inherit" className="text-5xl mb-4 text-[#003366]" />
                <Typography variant="h5" className="text-xl font-bold text-center text-gray-700">
                  I AM A PRINTING PROVIDER
                </Typography>
              </Button>
            </a>
          </div>
        </div>
      </Container>
      
      {/* Footer (optional) */}
      <div className="bg-white p-4 text-center shadow-inner mt-16">
        <Typography variant="body1" className="text-gray-600">
        </Typography>
      </div>
    </div>
  );
}

export default Home;
