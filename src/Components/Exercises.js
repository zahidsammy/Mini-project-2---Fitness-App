import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

// Functional component representing a list of exercises with pagination
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // State to manage current page of pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9; // Number of exercises per page

  // Calculating indexes for exercises to be displayed on the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Function to handle pagination change
  const paginate = (e, value) => {
    setCurrentPage(value); // Update current page
    window.scrollTo({ top: 1800, behavior: 'smooth' }); // Smooth scroll to a specific position
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      {/* Title for the list of exercises */}
      <Typography variant="h3" mb="46px" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
        Showing Results
      </Typography>

      {/* Stack to display exercise cards */}
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {/* Mapping and rendering each exercise as an ExerciseCard component */}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      {/* Pagination component */}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises; // Exports the Exercises component for use in other components
