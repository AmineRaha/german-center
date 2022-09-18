import React from 'react'
import { Card, Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTime from '@mui/icons-material/AccessTime';

export const Contact = () => {

    const md = useMediaQuery('(min-width:900px)');
    const lg = useMediaQuery('(min-width:1200px)');

    const parentVarient={

        visible:{
            transition:{
                delay: 0,
                staggerChildren: 0.2,
                when: "beforeChildren"
                
            }
        }
    };

    const adresseVarient= lg
    ? {
        visible:{
            x: [-100,50],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    }
    : {
        visible:{
            x: [-100,0],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    };

    const contactVarient=lg 
    ? {
        visible:{
            x: [-150,0],
            y: [100,100],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    }
    : {
        visible:{
            x: [-100,0],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    };

    const openVarient= lg
    ? {
        
        visible:{
            x: [-250,-50],
            y: [180,180],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    }
    : {
        
        visible:{
            x: [-100,0],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    };

  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop:"100px", paddingBottom:{sm:'20px',md:"70px"}}}>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{paddingX: {xs:1, sm:3, md:4, lg:5}}}>
            <Typography variant='h2' sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", marginBottom: 5, fontSize:{xs:"2.5rem", sm:"2.5rem", md:"3rem"}}}>KONTAKT</Typography>

            <Grid container justifyContent="center" alignItems="center" spacing={4} component={motion.div} sx={{marginBottom: {xs:"50px",sm:"50px", md:"220px"}}}
                viewport={{ once: true }}
                variants={parentVarient}
                whileInView="visible"
            >

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                    variants={adresseVarient}
                >
                    <Card sx={{paddingX: "35px", paddingY:"20px",backgroundColor:"#daebff"}}>
                        <Stack>
                            <Typography variant='h5' color="primary" sx={{ mb: 2, fontWeight: 600 }}>ADRESSE</Typography>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <LocationOnIcon sx={{marginTop: 0.5, fontSize:"2rem"}} /> 
                                <Typography variant='p' sx={{lineHeight: 2, fontSize:"20px"}}>San Francisco, CA 94158 <br/>500 Terry Francois St.</Typography>
                                <Typography variant='p'></Typography>
                            </Stack>
                        </Stack>    
                    </Card>
                </Grid>

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                    variants={contactVarient}
                >
                    <Card sx={{paddingX: "35px", paddingY:"20px",backgroundColor:"#a7b9ff"}}>
                        <Stack>
                            <Typography variant='h5' color="primary" sx={{ mb: 2, fontWeight: 600 }}>CONTACT</Typography>
                            <Typography variant='p' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 1, fontSize:"20px"}}>
                                <WhatsAppIcon sx={{marginRight: "10px"}}/> +123-456-7890
                            </Typography>
                            <Typography variant='p' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 2, fontSize:"20px"}}>
                                <MailIcon sx={{marginRight: "10px"}}/>belatel@amail.com
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
                    </Card>
                </Grid>

                <Grid item md={12} lg={4} component={motion.div} sx={{width:"100%"}}
                    variants={openVarient}
                >
                    <Card sx={{paddingX: "35px", paddingY:"20px",backgroundColor:"#7589cc"}}>
                        <Stack>
                            <Typography variant='h5' color="primary" sx={{ mb: 2, fontWeight: 600 }}>OPENING HOURS</Typography>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <AccessTime sx={{marginTop: 0.5, fontSize:"2rem"}}/>
                                <Typography variant='p' sx={{ mb: 1, fontSize:"18px",lineHeight: 2 }}>Mon - Fri : 8:00 am – 8:00 pm <br/>Saturday : 9:00 am – 7:00 pm</Typography>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>

            </Grid>
        </Stack>
    </section>
  )
}
