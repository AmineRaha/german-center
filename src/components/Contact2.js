import React from 'react'
import { Box, Card, Grid, IconButton, Stack, Typography } from '@mui/material'
import { motion } from "framer-motion";

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AccessTime from '@mui/icons-material/AccessTime';

export const Contact2 = () => {

  return (
    <Box sx={{ backgroundColor: "primary.light", width: "100%", paddingTop:"100px", paddingBottom:{sm:'20px',md:"20px"}}}>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{paddingX: {xs:1, sm:3, md:4, lg:10}}}>
            <Typography variant='h2' sx={{color: "secondary.dark", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", marginBottom: 5, fontSize:{xs:"2.5rem", sm:"2.5rem", md:"3rem"}}}>KONTAKT</Typography>

            <Grid container justifyContent="center" alignItems="flex-start" spacing={4} component={motion.div} sx={{marginBottom: {xs:"50px",sm:"50px", md:"70px"}}}

            >

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                >
                        <Stack>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }}>ADRESSE</Typography>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <LocationOnIcon sx={{marginTop: 0.5, fontSize:"2rem", color:"secondary.main"}} /> 
                                <Typography variant='p' sx={{lineHeight: 2, fontSize:"20px", borderLeft:"3px solid ", borderColor:"secondary.main", marginLeft:"0 !important", paddingLeft:"16px"}}>Hooverstraße 6<br/>86156 Augsburg<br/>Germany</Typography>
                            </Stack>
                        </Stack>    
                </Grid>

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                >
                        <Stack>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }}>CONTACT</Typography>
                            <Typography variant='p' sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1, fontSize:"20px"}}>
                                <WhatsAppIcon sx={{marginTop: 0.5,marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/> <Typography sx={{lineHeight: 2, fontSize:"20px", borderLeft:"3px solid ", borderColor:"secondary.main", marginLeft:"0 !important", paddingLeft:"16px"}}>+49 176-20932568 <br/> +212 719-901354</Typography> 
                            </Typography>
                            <Typography variant='p' sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1, fontSize:"20px"}}>
                                <MailIcon sx={{marginTop: 0.5, marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/> <Typography sx={{lineHeight: 2, fontSize:"20px", borderLeft:"3px solid ", borderColor:"secondary.main", marginLeft:"0 !important", paddingLeft:"16px"}}>Institut@belatel.de <br/> Belatelinstitut@gmail.com</Typography> 
                            </Typography>
                            <Stack direction="row">
                                <IconButton aria-label="add to favorites">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="add to favorites">
                                    <LinkedInIcon />
                                </IconButton>
                            </Stack>
                        </Stack>    
                </Grid>

                

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                >
                        <Stack>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }}>ÖFFNUNGSZEITEN</Typography>
                            <Stack direction={"row"} sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1, fontSize:"20px"}}>
                                <AccessTime sx={{marginTop: 0.5, marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/>
                                <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} sx={{borderLeft:"3px solid ", borderColor:"secondary.main", marginLeft:"0 !important", paddingLeft:"16px"}}>
                                    <Typography sx={{lineHeight: 2, fontSize:"20px" }}>Montag - Freitag</Typography>
                                    <TrendingFlatIcon sx={{marginX:"10px", fontSize:"30px"}}/>
                                    <Typography sx={{lineHeight: 2, fontSize:"20px"}}>8:00 – 12:00 // 14:00 – 18:00</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                </Grid>

            </Grid>
        </Stack>
    </Box>
  )
}
