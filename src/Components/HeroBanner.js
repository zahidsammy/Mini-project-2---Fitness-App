import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/pxfuel.jpg'; // Importing the image for the Hero Banner

// Functional component representing the Hero Banner section
const HeroBanner = () => {
  return (
    // Box container for the Hero Banner section with defined styling
    <Box
      sx={{
        // Margins for different screen sizes
        mt: { lg: '212px', sx: '70px' }, // Top margin
        ml: { sm: '50px' }, // Left margin for smaller screens
      }}
      position="relative" // Defines the position of the Box
      p="20px" // Padding for the Box component
    >
      {/* Title */}
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={2}>
        Kamehameha Training Dojo
      </Typography>

      {/* Subtitle */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '35px', sx: '30px' } }} mb="23px" mt="30px">
        Channel Your Anime Spirit, <br /> Unleash Your Strength!
      </Typography>

      {/* Description */}
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out our new Exercises
      </Typography>

      {/* Button for exploring exercises */}
      <Button
        variant="contained"
        color="error"
        href="#exercises" // Link to the exercises section
        sx={{ backgroundColor: '#ff2625', padding: '10px' }} // Styling for the Button component
      >
        Explore Exercise
      </Button>

      {/* Hero Banner Image */}
      <img
        src={HeroBannerImage} // Image source
        alt="banner" // Image alt text
        className="hero-banner-img" // Class name for styling purposes
        sx={{
          width: { sm: '50%', md: '60%', lg: '40%' }, // Responsive width for different screen sizes
          mb: { sm: '20px', lg: '0' }, // Margin bottom for different screen sizes
        }}
        style={{
          maxWidth: '50%', // Ensure the image is responsive
          height: 'auto', // Maintain aspect ratio
          display: 'block', // Ensure proper layout
          marginLeft: 'auto', // Center the image horizontally
          marginRight: 'auto',
        }}
      />
    </Box>
  );
};

export default HeroBanner; // Exports the HeroBanner component for use in other components
