import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [runningSpeed, setRunningSpeed] = useState('');
  const [bmi, setBMI] = useState(null);
  const [healthStatus, setHealthStatus] = useState('');

  const calculateBMI = () => {
    
    // Convert height and weight to numbers
    const heightInMeters = height / 100; // Convert height from cm to meters
    const weightInKg = weight;

    // Calculate BMI
    const calculatedBMI = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(calculatedBMI);

    // Determine health status based on BMI
    if (calculatedBMI < 12 || calculatedBMI > 25) {
      setHealthStatus('Unhealthy');
    } else {
      setHealthStatus('Healthy');
    }

    // Check if running speed is less than or equal to 10 km/h (5 km in 30 minutes)
    if (runningSpeed && parseInt(runningSpeed) <= 10) {
      setHealthStatus('Healthy');
    } else {
      setHealthStatus('Unhealthy');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px', margin: 'auto' }}>
      <TextField
        type="number"
        label="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="number"
        label="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="text"
        label="Sex"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="number"
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="number"
        label="Running speed over 5km (km/h)"
        value={runningSpeed}
        onChange={(e) => setRunningSpeed(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" onClick={calculateBMI}>Calculate BMI</Button>
      {bmi && (
        <Typography variant="body1">
          Your BMI is: {bmi}
        </Typography>
      )}
      {healthStatus && (
        <Typography variant="body1" sx={{ color: healthStatus === 'Healthy' ? 'green' : 'red' }}>
          You are considered {healthStatus} and Turning into a Super Saiyan requires intense dedication and training. If you do 1000 push-ups, 50 kilometers of running, 1000 sit-ups, 1000 pull-ups, and maintain a one-hour plank, you're quite close to the transformation! However, health comes first. Make sure to maintain a healthy BMI to support your intense training regimen.
        </Typography>
      )}
    </Box>
  );
};

export default BmiCalculator;

