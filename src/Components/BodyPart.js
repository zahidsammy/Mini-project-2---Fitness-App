import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'; // Importing an image icon

// Functional component representing a body part card
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    // Stack component used as a button-like container for body parts
    <Stack
      type="button" // Configures Stack as a button
      alignContent="center"
      justifyContent="center" // Center content horizontally and vertically
      className="bodyPart-card" // Assigns a CSS class to the Stack component
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '', // Adds top border if bodyPart matches item
        background: '#fff', // Background color set to white
        borderBottomLeftRadius: '20px', // Applies border radius to bottom left corner
        width: '270px', // Sets width of the Stack component
        height: '282px', // Sets height of the Stack component
        cursor: 'pointer', // Changes cursor to pointer on hover
        gap: '47px', // Specifies gap between child elements
      }}
      onClick={() => {
        setBodyPart(item); // Updates bodyPart state with the selected item
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' }); // Scrolls window to a specific position smoothly
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> {/* Displays an image icon */}
      <Typography
        fontSize="24px" // Sets font size for the Typography component
        fontWeight="bold" // Applies bold font weight
        color="#3A1212" // Sets text color to a specific hex color
        textTransform="capitalize" // Capitalizes text (changes lowercase to uppercase for the first letter)
      >
        {item} {/* Displays the body part name */}
      </Typography>
    </Stack>
  );
};

export default BodyPart; // Exports the BodyPart component for use in other components

