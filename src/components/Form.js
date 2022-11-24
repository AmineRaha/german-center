import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Form = () => {
  return (
    <Box sx={{ backgroundColor: "primary.light", width: "100%", paddingTop:"100px", paddingBottom:{sm:'20px',md:"20px"}, marginBottom:"20px"}}>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{paddingX: {xs:1, sm:3, md:4, lg:10}}}>
        <Typography variant='h2' sx={{color: "secondary.dark", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", marginBottom: 5, fontSize:{xs:"2.5rem", sm:"2.5rem", md:"3rem"}}}>Form</Typography>

        </Stack>
    </Box>
  )
}

export default Form