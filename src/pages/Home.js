import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Stack alignItems="center" height={"89vh"} justifyContent={"center"} sx={{backgroundImage: `url(${"https://picsum.photos/1920/1080"})`}}  >
      <Typography variant='h1'>German Center</Typography>
    </Stack>
  )
}

export default Home