import { Stack, Typography } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';

const Numbers = () => {
  return (

    <section style={{ backgroundColor: "#00000085", width: "100%"}}>
        <Stack  direction="row" justifyContent="space-evenly" alignItems="center" spacing={4} sx={{minHeight: "400px", maxHeight: "1400px"}} px={7}>
            <Stack  direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#afbdc4", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#afbdc4", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"#afbdc4", fontSize:{sm:"40px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10.5} decimals={1} duration={1.5} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", fontSize:{sm:"1rem", xl:"2rem"}}}>MILLIARDEN EURO VERWALTETES VERMÖGEN</Typography>
            </Stack>
        </Stack>
    </section>
  )
}

export default Numbers