import React from 'react'
import { motion } from "framer-motion";
import { Typography } from '@mui/material';

const Welcome = () => {
  return (
    <motion.div style={{ height: "89vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${"https://picsum.photos/1920/1080"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y:'20', opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{ duration: 1.2 }}
        >
          <Typography variant='h1' sx={{ fontWeight: "bold"}}>Lorem Ipsum</Typography>
        </motion.div>
      </motion.div>
  )
}

export default Welcome