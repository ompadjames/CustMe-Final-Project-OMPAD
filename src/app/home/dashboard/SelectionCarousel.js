// SelectionCarousel.js
import React from "react";
import {
  Box,
  IconButton,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SelectionCarousel = ({ items, handleNext, handlePrevious, currentIndex }) => {
  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "-40px",
        marginRight: "50px",
      }}
    >
      <IconButton onClick={handlePrevious} aria-label="previous" sx={{ mr: 1 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Grid container spacing={2}>
          {visibleItems.map((item, index) => (
            <Grid item xs={4} sm={4} key={index}>
              <Paper sx={{ p: 2, boxShadow: 3, textAlign: "center" }}>
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
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <IconButton onClick={handleNext} aria-label="next" sx={{ ml: 1 }}>
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default SelectionCarousel;
