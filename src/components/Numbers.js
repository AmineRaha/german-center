import { Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';

const Numbers = () => {

    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (

    <section style={{ backgroundColor: "#00000085", width: "100%"}}>
        <Stack direction={largeScreen?"row":"column"}  justifyContent="space-evenly" alignItems="center" spacing={4} sx={{minHeight: "400px", maxHeight: "1400px"} } px={7}>
            <Stack  direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#a7b9ff", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="secondary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{xs:"0.5rem",sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#a7b9ff", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="secondary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{xs:"0.5rem",sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#a7b9ff", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="secondary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{xs:"0.5rem",sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
        </Stack>
    </section>
  )
}

export default Numbers