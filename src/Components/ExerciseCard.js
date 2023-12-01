import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// Functional component representing an exercise card
const ExerciseCard = ({ exercise }) => (
  // Link to navigate to a specific exercise based on its ID
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    {/* Displays an image of the exercise with lazy loading */}
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

    {/* Stack to display buttons for body part and target muscle */}
    <Stack direction="row">
      {/* Button displaying the body part of the exercise */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>

      {/* Button displaying the target muscle of the exercise */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>

    {/* Typography displaying the name of the exercise */}
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard; // Exports the ExerciseCard component for use in other components
