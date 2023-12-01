import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import { ExercsieDetail } from './pages/ExerciseDetail';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import {Footer} from "./components/Footer";
import BmiCalculator from './pages/BMI';


const App = () => {
  return (
  
        <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExercsieDetail />} />
                <Route path="/src/pages/BMI.js" element={<BmiCalculator />} />
            </Routes>

            <Footer />


        </Box>
    )
  
}

export default App
