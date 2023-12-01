import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { HorizontalScrollbar } from './HorizontalScrollbar';

// Component for searching and displaying exercises
export const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState(''); // State to manage the search input
  const [bodyParts, setBodyParts] = useState([]); // State to hold body parts data

  useEffect(() => {
    // Fetches body parts data when the component mounts
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  // Function to handle search and fetch exercises based on the search term
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`, exerciseOptions);

      setSearch('');
      setExercises(exerciseData);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt={90} mb="50px" ml={20} textAlign="center">
        Awesome Exercises you <br /> Should Know
      </Typography>

      {/* Search bar for exercises */}
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '1300px', xs: '380px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        {/* Button to trigger the search */}
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        ></Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* Horizontal scrollbar for body parts */}
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};
