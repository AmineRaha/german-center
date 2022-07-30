import { Box, Grid, Stack, Typography } from '@mui/material'
import { createTheme } from '@mui/system';
import React from 'react'
import { motion } from "framer-motion";
import { height } from '@mui/system';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Numbers from '../components/Numbers';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';



const Home = () => {
  return (
    <Stack alignItems="center" justifyContent={"center"}  >

      <Welcome/>
      <About/>
      <Numbers/>
      <Section3/>
      <Section4/>
      <Section5/>

    </Stack>
  )
}

export default Home