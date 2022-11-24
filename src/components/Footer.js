import { Box, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logo from "../assets/images/logo/logo3.svg";


const Footer = () => {
  
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'));
  return (
    <Box sx={{width:"100%", backgroundColor: "secondary.dark", paddingTop:"40px", paddingBottom:"10px", height:"35%"}}>

      <Stack justifyContent={"space-around"} alignItems={"center"} height={"100%"} mx={5}>

        <Stack sx={{color:" white", width:"100%"}} direction={largeScreen?"row":"column"} justifyContent={"space-around"} alignItems={"center"}>

            <Stack sx={{width:"100%", textAlign:{xs:"center",sm:"left"}, marginBottom:{xs:"25px"}}}>
                <Typography variant='h3' sx={{fontSize:"14px", fontWeight:"600", lineHeight:"1rem", letterSpacing:"3px", marginBottom:"20px"}}>Kontakt</Typography>
                <Typography variant='h3' sx={{fontSize:"12px", fontWeight:"400", lineHeight:"1rem", letterSpacing:"3px"}}>Hooverstraße 6<br/>86156 Augsburg<br/>Germany<br/><br/>Telefon DE: +49 176-20932568<br/>Telefon MA: +212 719-901354</Typography>
            </Stack>

            <img src={logo} alt="logo" style={{width: '200px', height:'100%', margin: '0 20px', filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(119deg) brightness(103%) contrast(102%)"}} />


            <Stack direction={"row"}   alignItems={"center"} sx={{textAlign:{xs:"center",sm:"right"},justifyContent:{xs:"center",sm:"flex-end"}, marginTop:{xs:"25px"}, width:"100%"}}>
                                <IconButton>
                                    <FacebookIcon sx={{color:"white", fontSize:"40px"}}/>
                                </IconButton>
                                <IconButton>
                                    <LinkedInIcon sx={{color:"white", fontSize:"40px"}}/>
                                </IconButton>
                            </Stack>

        </Stack>

        <Stack sx={{color:"#2a1309", marginTop:"50px", width:"100%", textAlign:"right"}}>
            Designed by Amine RAHA
        </Stack>

      </Stack>
    </Box>
  )
}

export default Footer