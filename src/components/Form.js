import React, { useRef } from 'react'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import MuiPhoneNumber from 'material-ui-phone-number';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Form = () => {

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
        y: [50,0],
        opacity:[0,1],
        transition:{
          ease: "easeOut", duration: 1 
        }
    }
  }

  const {t} = useTranslation();

  
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yb9x91o', 'template_0ub8vta', form.current, 'Edc8y_P11Nf_wo8XG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box sx={{ backgroundColor: "white", width: "100%", paddingTop:"80px", paddingBottom:{sm:'30px',md:"60px"}}}>
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{paddingX: {xs:1, sm:3, md:4, lg:10}, backgroundColor:"primary.main", paddingY:"80px"}}
          component={motion.div}
          viewport={{ once: true }}
          variants={parentVarient}
          whileInView="visible"
        >
        <Typography variant='h2' sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", textTransform: "uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, marginBottom:5, textAlign:"center", width:"100%"}}>Form</Typography>

        <motion.div style={{position: "relative", marginBottom: "10px"}}
            
        >
          <Container sx={{ position: "absolute", top: "7px", backgroundColor: "secondary.dark", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"2px", padding:"0" }} component={motion.div} variants={childVarient}/>
          <Typography mb={"0.9rem"}  sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1' component={motion.div} variants={childVarient}>{t("form_text1")}</Typography>

          <Typography sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'>
            <ul style={{listStyleType:"decimal", marginLeft:"30px"}}>
                <motion.li component={motion.div} variants={childVarient}>
                  <Typography>
                    {t("form_text2")}
                  </Typography>
                </motion.li>
                <motion.li component={motion.div} variants={childVarient}>
                  <Typography>
                    {t("form_text3")}
                  </Typography>
                </motion.li>
                <motion.li component={motion.div} variants={childVarient}>
                  <Typography>
                    {t("form_text4")}
                  </Typography>
                </motion.li>
              </ul>
              </Typography>

        </motion.div>

        <form style={{width:"100%"}} ref={form} onSubmit={sendEmail}>

          <Grid container spacing={2} sx={{marginTop:2, padding:6, backgroundColor:"primary.light", borderRadius:"10px"}  }>

            <Grid item xs={12} sm={6} lg={3} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <TextField label="Vollständiger Name" color={"secondary"} variant='standard' name="name" sx={{width:"80%", marginBottom:3}} required/>
            </Grid>
            
            <Grid item xs={12} sm={6} lg={3} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <TextField label="E-Mail Adresse" color={"secondary"} variant='standard' name="email" sx={{width:"80%", marginBottom:3}}/>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <MuiPhoneNumber defaultCountry={'de'} label="Telefonnummer" color={"secondary"} name="tel" sx={{width:"80%", marginBottom:3}} required/>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <TextField label="Berufsbezichnung" color={"secondary"} variant='standard' name="job" sx={{width:"80%", marginBottom:3}}/>
            </Grid>

            <Grid item xs={12} lg={6}  sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <TextField label="Wie viel erfahrung hast du?" color={"secondary"} variant='standard' name="experience" sx={{width:"80%", marginBottom:3}}/>
            </Grid>

            <Grid item xs={12} lg={6} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <TextField label="An welchem Standort möchtest Du eingesetzt werden?" color={"secondary"} variant='standard' name="work_location" sx={{width:"80%", marginBottom:6}}/>
            </Grid>

            <Grid item xs={12} sx={{textAlign:"center"}} component={motion.div} variants={childVarient}>
              <Button variant="contained" color={"secondary"} sx={{width:"200px"}} type="submit" >Senden</Button>
            </Grid>

          </Grid>
        </form>
        </Stack>
    </Box>
  )
}

export default Form