import React from 'react'
import { motion } from "framer-motion";
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import logo from "../assets/images/logo/logo3.svg";

const Welcome = () => {

  const {t} = useTranslation();

  const parentVarient={
    hidden: { opacity: 0, y:20 },
    show:{
      opacity: 1, y:0,
      transition:{
        duration:1.75,
        staggerChildren: 0.3,
      }
    } 
  }

  const childVarient={
    hidden: { opacity: 0 },
    show: { opacity: 1}
  }

  return (
    <Box sx={{height: {xs:"70vh",sm:"89vh"}, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "#00000030"}}>
        <Stack justifyContent="center" alignItems="center" component={motion.div}
          variants={parentVarient}
          initial="hidden"
          animate="show"
        >
          <Typography  variant='h1' color="primary" sx={{fontSize:{xs:"25px",sm:"40px",md:"55px",lg:"60px",xl:"80px"}, textAlign:"center"}} component={motion.div} 
            variants={childVarient}
          >
            
          </Typography>
          <Box sx={{width:{xs:"200px", sm:"360px", md:"500px",lg:"550px",xl:"650px"}}}>
            <motion.img variants={childVarient} src={logo} alt="logo" style={{width: "100%", height:'100%', margin: '0 0px',filter: "invert(100%) sepia(98%) saturate(0%) hue-rotate(311deg) brightness(102%) contrast(105%) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4)"}} />
          </Box>
          <Typography  variant='h1' color="white" sx={{fontSize:{xs:"25px",sm:"40px",md:"55px",lg:"60px",xl:"80px"}, fontWeight:"700", textAlign:"center", textTransform:"uppercase", marginTop:"10px", textShadow: "3px 5px 2px rgba(0,0,0,0.4)"}} component={motion.div} 
            variants={childVarient}
          >
            {t("wir_verbinden")}
          </Typography>
        </Stack>
      </Box>
  )
}

export default Welcome