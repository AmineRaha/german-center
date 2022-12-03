import React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import { motion } from "framer-motion";

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AccessTime from '@mui/icons-material/AccessTime';

export const Contact2 = () => {

    const parentVarient={
        visible:{
            transition:{
                delay: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
      }
    
      const childVarient={
        visible:{
            x: [-50,0],
            opacity:[0,1],
            transition:{
              ease: "easeOut", duration: 1 
            }
        }
      }

  return (
    <Box sx={{ backgroundColor: "primary.light", width: "100%", paddingTop:"100px", paddingBottom:{sm:'20px',md:"20px"}}}>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{paddingX: {xs:1, sm:3, md:4, lg:10}}}>
            <Typography variant='h2' sx={{color: "secondary.dark", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", marginBottom: 5, fontSize:{xs:"2.5rem", sm:"2.5rem", md:"3rem"}}}>KONTAKT</Typography>

            <Grid container justifyContent="center" alignItems="flex-start" spacing={4} sx={{marginBottom: {xs:"50px",sm:"50px", md:"70px"}}}
                component={motion.div}
                viewport={{ once: true }}
                variants={parentVarient}
                whileInView="visible"
            >

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                >
                        <Stack sx={{alignItems:{xs:"center", lg:"flex-start"}}}>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }}  component={motion.div} variants={childVarient}>ADRESSE</Typography>
                            <Stack alignItems="flex-start" spacing={2} direction={{xs:"column", lg:"row"}} sx={{ alignItems:{xs:"center", lg:"flex-start"}}}  component={motion.div} variants={childVarient}>
                                <LocationOnIcon sx={{marginTop: '13px', fontSize:"2rem", color:"secondary.main"}} /> 
                                <Typography variant='p' sx={{lineHeight: 2, fontSize:"20px", borderLeft:{lg:"3px solid",xs:"0"}, borderTop:{xs:"3px solid",lg:"0"}, borderColor:{xs:"secondary.main",lg:"secondary.main"}, marginLeft:"0 !important", paddingLeft:{xs:"0", lg:"16px"}, marginTop:{xs:"9px !important", lg:""}, textAlign:{xs:"center",lg:"left"}}}>Hooverstraße 6<br/>86156 Augsburg<br/>Germany</Typography>
                            </Stack>
                        </Stack>    
                </Grid>

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                >
                        <Stack sx={{alignItems:{xs:"center", lg:"flex-start"}}}>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }} component={motion.div} variants={childVarient}>CONTACT</Typography>
                            <Stack alignItems="flex-start" spacing={2} direction={{xs:"column", lg:"row"}} sx={{ alignItems:{xs:"center", lg:"flex-start"}}} component={motion.div} variants={childVarient}>
                                <WhatsAppIcon sx={{marginTop: '13px',marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/>
                                <Typography variant='p' sx={{lineHeight: 2, fontSize:"20px", borderLeft:{lg:"3px solid",xs:"0"}, borderTop:{xs:"3px solid ",lg:"0"}, borderColor:{xs:"secondary.main",lg:"secondary.main"}, marginLeft:"0 !important", paddingLeft:{xs:"0", lg:"16px"}, marginTop:{xs:"9px !important", lg:""}, textAlign:{xs:"center",lg:"left"}}}>+49 176-20932568 <br/> +212 719-901354</Typography> 
                            </Stack>
                            <Stack alignItems="flex-start" spacing={2} direction={{xs:"column", lg:"row"}} sx={{ alignItems:{xs:"center", lg:"flex-start"}}} component={motion.div} variants={childVarient}>
                                <MailIcon sx={{marginTop: '13px', marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/> 
                                <Typography variant='p' sx={{lineHeight: 2, fontSize:"20px", borderLeft:{lg:"3px solid",xs:"0"}, borderTop:{xs:"3px solid",lg:"0"}, borderColor:{xs:"secondary.main",lg:"secondary.main"}, marginLeft:"0 !important", paddingLeft:{xs:"0", lg:"16px"}, marginTop:{xs:"9px !important", lg:""}, textAlign:{xs:"center",lg:"left"}}}>Institut@belatel.de <br/> Belatelinstitut@gmail.com</Typography> 
                            </Stack>
                            <Stack direction="row" component={motion.div} variants={childVarient}>
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
                        <Stack sx={{alignItems:{xs:"center",md:"center", lg:"flex-start"}}}>
                            <Typography variant='h5' color="secondary" sx={{ mb: 2, fontWeight: 600 }} component={motion.div} variants={childVarient}>ÖFFNUNGSZEITEN</Typography>
                            <Stack alignItems="flex-start" spacing={2} direction={{xs:"column", lg:"row"}} sx={{alignItems:{xs:"center", lg:"flex-start"}}} component={motion.div} variants={childVarient}>
                                <AccessTime sx={{marginTop: '13px', marginRight: "8px", color:"secondary.main", fontSize:"30px"}}/>
                                <Stack justifyContent={"flex-start"} alignItems={"center"} direction={{xs:"column", lg:"row"}} sx={{borderLeft:{lg:"3px solid",xs:"0"}, borderTop:{xs:"3px solid ",lg:"0"}, borderColor:{xs:"secondary.main",lg:"secondary.main"}, marginLeft:"0 !important", paddingLeft:{xs:"0", lg:"16px"}, marginTop:{xs:"9px !important", lg:""}, textAlign:{xs:"center",lg:"left"}}}>
                                    <Typography sx={{lineHeight: 2, fontSize:"20px" }}>Montag - Freitag</Typography>
                                    <TrendingFlatIcon sx={{marginX:"10px", fontSize:"30px",rotate:{xs:"90deg",lg:"0deg"}}}/>
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
