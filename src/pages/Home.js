import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Stack alignItems="center" height={"89vh"} justifyContent={"center"} sx={{backgroundImage: `url(${"https://picsum.photos/1920/1080"})`}}  >
      <motion.div
        initial={{ y:'20', opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{ duration: 1.2 }}
      >
        <Typography variant='h1' sx={{ fontWeight: "bold"}}>German Center</Typography>
      </motion.div>
    </Stack>
  )
}

export default Home