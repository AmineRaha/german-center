import { Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section7 = () => {

  const {t} = useTranslation();

    return (
        <section style={{width:"100%", backgroundColor: "white", paddingTop:"20px", paddingBottom:"70px"}}>
        <Stack direction="row" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "clip"}}>
    
            <Stack sx={{ width: {md:"30%", lg:"100%"}, display:{xs:"none" , lg:"block"}, backgroundImage: `url("https://picsum.photos/700/550")`,backgroundRepeat: "no-repeat",backgroundSize: "cover" }}>
            </Stack>
    
            <Stack xs={6} direction="row" justifyContent="flex-start" alignItems="center" width={"100%"} sx={{backgroundColor: "#daebff", maxWidth: "1400px", direction: i18n.language === "ar" ? "rtl" : "ltr"}}>
              <div style={{backgroundColor: "#daebff", padding:"70px 50px 50px 50px", maxWidth: "1400px"}}>
    
    
                <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px",textTransform:"uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}} component={motion.div}
                  initial={{ y:50, opacity: 0}}
                  whileInView={{ y:0, opacity: 1}}
                  transition={{ duration: 1,delay: 0.2, type: "just"}}
                  viewport={{ once: true }}
                >{t("section7_title")} </Typography>
    
                <motion.div style={{position: "relative", marginBottom: "10px"}}
                  initial={{ y:50, opacity: 0}}
                  whileInView={{ y:0, opacity: 1}}
                  transition={{ duration: 1,delay: 0.4, type: "just"}}
                  viewport={{ once: true }}
                >
                  <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"}, marginTop:"6px" }} />
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text1")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text2")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text3")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text4")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text5")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text6")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text7")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text8")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text9")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section7_text10")} </Typography>

                </motion.div>
              </div>
            </Stack>
    
        </Stack>
    
        </section>
      )
    }

export default Section7