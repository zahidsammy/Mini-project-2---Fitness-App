// Importing necessary modules and components from React and Material-UI
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Importing custom components
import Exercises from '../components/Exercises';
import { SearchExercises } from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

// Functional component for the Home page
const Home = () => {
  // State hooks for managing exercises and selected body part
  const [exercises, setExercises] = useState([]); // Manages the list of exercises
  const [bodyPart, setBodyPart] = useState('all'); // Tracks the selected body part

  return (
    // Rendering components within a Box component
    <Box>
      {/* HeroBanner component for displaying a hero section/banner */}
      <HeroBanner />

      {/* SearchExercises component for searching/filtering exercises */}
      {/* Passes setExercises, bodyPart, and setBodyPart as props */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      {/* Exercises component for displaying exercises */}
      {/* Passes setExercises, exercises, and bodyPart as props */}
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

// Exporting the Home component as the default export
export default Home;