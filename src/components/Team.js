import React from 'react'
import { motion } from "framer-motion";

import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Team = () => {

    const parentVarient={
        hidden:{
            y: 0,
            opacity: 1
        },
        show:{
            whileInView:{
                y: 0,
                opacity:1,
                transition:{
                    delay: 1
                }
            }
        }
    }

    const childVarient={
        hidden:{
            y: 100,
            opacity: 0.5
        },
        show:{
            whileInView:{
                y: 0,
                opacity:1,
                transition:{
                    delay: 1
                }
            }
        }
    }
  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop:"50px", paddingBottom:"50px"}}>
        <Stack justifyContent="center" alignItems="center">
            <Typography variant='h4' sx={{marginBottom: 5}}>The Team</Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={4} component={motion.div}
                variants={parentVarient}
                initial="hidden"
                animate="show"
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
                    whileInView={{ y:[100,0], opacity: [0,1]}}
                    transition={{ duration: 1, type: "just"}}
                    viewport={{ once: true }}
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
                    whileInView={{ y:[100,0], opacity: [0,1]}}
                    transition={{ duration: 1, type: "just"}}
                    viewport={{ once: true }}
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