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
import { Contact2 } from '../components/Contact2';
import Form from '../components/Form';


//8-18 12-2 24/7
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
      <Contact2/>

    </Stack>
  )
}

export default Home