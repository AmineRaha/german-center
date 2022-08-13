import React from 'react'
import { motion } from "framer-motion";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Team = () => {

    const parentVarient={

        visible:{
            transition:{
                delay: 0.2,
                staggerChildren: 0.2,
                when: "beforeChildren"
                
            }
        }
        
    }

    const childVarient={
        
        visible:{
            y: [100,0],
            opacity:[0,1],
            transition:{
                ease: "easeOut", duration: 1 
            }
        }
    }

  return (
    <section style={{ backgroundColor: "#eeeded", width: "100%", paddingTop:"50px", paddingBottom:"50px"}}>
        <Stack justifyContent="center" alignItems="center">
            <Typography variant='h2' sx={{color: "black", fontWeight: "600",fontSize: "46px", lineHeight: "1.2em", letterSpacing:"7px", marginBottom: 5}}>PARTNER VORSTAND</Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={4} component={motion.div}
                viewport={{ once: true }}
                variants={parentVarient}
                whileInView="visible"
            >

                <Grid item xl={3} lg={4} md={5} sm={6} xs={12} component={motion.div}
                    variants={childVarient}
                >
                    <Card sx={{ maxWidth: 336, margin: "auto" }}>

                        <CardMedia
                            component="img"
                            height="402"
                            image="https://picsum.photos/402/336"
                            alt="teampic"
                        />

                        <CardContent>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Art Director
                            </Typography>

                            <Typography variant="h5" component="div">
                            Ashley Jones
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 4 }}>
                            Something about them.
                            <br />
                            {'"INSERT QUOTE HERE"'}
                            </Typography>

                            <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                                <PhoneIcon sx={{marginRight: "10px"}}/>  +123456789
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                             Something about them.
                            </Typography>

                        </CardContent>

                        <CardActions disableSpacing>

                            <IconButton aria-label="add to favorites">
                                <FacebookIcon />
                            </IconButton>

                            <IconButton aria-label="share">
                                <LinkedInIcon />
                            </IconButton>

                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xl={3} lg={4} md={5} sm={6} xs={12} component={motion.div}
                    variants={childVarient}
                    >
                    <Card sx={{ maxWidth: 336, margin: "auto" }}>

                        <CardMedia
                            component="img"
                            height="402"
                            image="https://picsum.photos/402/336"
                            alt="teampic"
                        />

                        
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Art Director
                            </Typography>
                            <Typography variant="h5" component="div">
                            Ashley Jones
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4 }}>
                            Something about them.
                            <br />
                            {'"INSERT QUOTE HERE"'}
                            </Typography>
                            <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <PhoneIcon sx={{marginRight: "10px"}}/>  +123456789
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Something about them.
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <LinkedInIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xl={3} lg={4} md={5} sm={6} xs={12} component={motion.div}
                    variants={childVarient}
                >
                    <Card sx={{ maxWidth: 336, margin: "auto" }}>

                        <CardMedia
                            component="img"
                            height="402"
                            image="https://picsum.photos/402/336"
                            alt="teampic"
                        />

                        
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Art Director
                            </Typography>
                            <Typography variant="h5" component="div">
                            Ashley Jones
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4 }}>
                            Something about them.
                            <br />
                            {'"INSERT QUOTE HERE"'}
                            </Typography>
                            <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <PhoneIcon sx={{marginRight: "10px"}}/>  +123456789
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Something about them.
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <LinkedInIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xl={3} lg={4} md={5} sm={6} xs={12} component={motion.div}
                    variants={childVarient}
                    >
                    <Card sx={{ maxWidth: 336, margin: "auto" }}>

                        <CardMedia
                            component="img"
                            height="402"
                            image="https://picsum.photos/402/336"
                            alt="teampic"
                        />

                        
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Art Director
                            </Typography>
                            <Typography variant="h5" component="div">
                            Ashley Jones
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4 }}>
                            Something about them.
                            <br />
                            {'"INSERT QUOTE HERE"'}
                            </Typography>
                            <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <PhoneIcon sx={{marginRight: "10px"}}/>  +123456789
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Something about them.
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <LinkedInIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                </Grid>



            </Grid>
        </Stack>
    
    </section>
  )
}

export default Team