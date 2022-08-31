import React from 'react'
import { motion } from "framer-motion";
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import logo from "../assets/images/logo3.png";

const Welcome = () => {

  const {t} = useTranslation();

  const parentVarient={

    visible:{
        transition:{
            delay: 0,
            staggerChildren: 0.3,
            when: "beforeChildren"
            
        }
    } 
  }

  const childVarient={
      visible:{
          y: [20,0],
          opacity:[0,1],
          transition:{
              ease: "easeOut", duration: 1 
          }
      }
  }

  return (
    <Box sx={{height: {xs:"70vh",sm:"89vh"}, width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${"https://picsum.photos/1920/1080"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <Stack justifyContent="center" alignItems="center" component={motion.div}
          variants={parentVarient}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Typography  variant='h1' color="primary" sx={{fontSize:{xs:"10vw",md:"9vw"}, textAlign:"center"}} component={motion.div} 
            variants={childVarient}
          >
            {t("welcome")}
          </Typography>
          <motion.img variants={childVarient} src={logo} alt="logo" style={{width: "70vw", height:'100%', margin: '0 20px'}} />
        </Stack>
      </Box>
  )
}

export default Welcome