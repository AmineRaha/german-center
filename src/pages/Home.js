import { Stack } from '@mui/material'
import React from 'react'

import Welcome from '../components/Welcome';
import About from '../components/About';
import Numbers from '../components/Numbers';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Team from '../components/Team';
import { Contact } from '../components/Contact';



const Home = () => {
  return (
    <Stack alignItems="center" justifyContent={"center"}  >

      <Welcome/>
      <About/>
      <Section7/>
      <Numbers/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Team/>
      <Contact/>

    </Stack>
  )
}

export default Home