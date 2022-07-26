import React from 'react'
import { Container, IconButton, Stack, Typography, useMediaQuery, Fade, Modal, Box, Backdrop } from '@mui/material'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import bg from "../assets/images/pictures/pic1.jpg";

import i18n from '../i18n';

const About = () => {

  const {t} = useTranslation();
  const islg = useMediaQuery("(max-width:1200px)");

  var Stack1Anim = {};

  if(islg){
   Stack1Anim = {
    initial: {x: -1000, opacity: 1},
    animate:{ x:0, opacity: 1},
    transition:{ duration: 1.4, type: "just" }
    }
  }else{
    Stack1Anim = {
      initial: {x: -300, opacity: 0},
      animate:{ x:80, opacity: 1},
      transition:{ duration: 1.5, type: "just" }
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs:"100%", sm:"90%",md:"80%" },
    bgcolor: "secondary.main",
    border: '0',
    borderRadius:"7px",
    '&:focus-visible': {
      outline: 'none',
    },
    
    boxShadow: 24,
    p: {xs:1, sm:2, md:4},
    direction: i18n.language === "ar" ? "rtl" : "ltr"
  };


  return (
    <section style={{width:"100%", backgroundColor: "white"}}>
      <Stack  direction="row" justifyContent="center" spacing={2} sx={{ overflowX: "clip", marginBottom:{sm:"0",md:"50px",lg:"180px"}, marginTop:{sm:"0",md:"50px", lg:"0"}}}>

              <Stack component={motion.div} zIndex={1} sx={{ overflowX: "clip", marginTop:{ md:"0", lg:"-50px"}, direction: i18n.language === "ar" ? "rtl" : "ltr"}}
                initial={Stack1Anim.initial}
                animate={Stack1Anim.animate}
                transition={Stack1Anim.transition}
              >
                <Stack backgroundColor="secondary.main" width={"600px"} sx={{width:{md:"1000px", lg:'600px'}, padding:{xs:"25px", sm:"30px",md:"70px 50px 50px 50px"}, marginRight:{md:0, lg:2}, borderRadius:"4px",boxShadow: "6px 5px 5px 0px rgb(0 0 0 / 15%)"}}>
                  <Typography color="primary" mb={"20px"} sx={{ fontWeight: "600", textTransform:"uppercase"}}>{t("institut")}</Typography>
                  <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", textTransform:"uppercase", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}}>{t("wer_sind_wir")}</Typography>
                  <div style={{position: "relative", marginBottom: "10px"}}>
                    
                  <Container sx={{ position: "absolute", top: "7px", backgroundColor: "primary.dark", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"1px", padding:"0" }} />
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'>{t("about_text1")}</Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'>{t("about_text2")}</Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'>{t("about_text3")}</Typography>
                  <Typography mb={"20px"}   sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'>{t("about_text4")}</Typography>

                  <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleOpen} sx={{"&:hover": {cursor:"pointer"}}}>
                    <Typography variant='button' color="primary" sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("read_more")}</Typography>
                    <IconButton color="primary" >
                      <KeyboardArrowDownIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
                    </IconButton>
                  </Stack>
                  </div>
                  
                </Stack>
              </Stack>


              <Stack component={motion.div} zIndex={0} sx={{ overflowX: "clip", display:{xs:"none", md:"none" , lg:"block"}, backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", marginTop:"40px!important", marginBottom:"-40px!important", width:"620px"}}
                initial={{ x:500, opacity: 0}}
                animate={{ x:0, opacity: 1}}
                transition={{ duration: 1.5, type: "just", delay: 0.6 }}
              >
              </Stack>

              <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={modalStyle}>
                    <Stack backgroundColor="secondary.main" pt={"20px"} pb={"20px"} pr={"30px"} pl={"20px"} sx={{width:"100%", marginRight:{md:0, lg:2}}}>
                      <Typography color="primary" mb={"20px"} sx={{ fontWeight: "600", textTransform:"uppercase"}}>{t("strategie")}</Typography>
                      <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", textTransform:"uppercase", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}}>{t("belatel_institut")}</Typography>

                      <div style={{position: "relative", marginBottom: "10px"}}>
                      <Container sx={{ position: "absolute", top: "7px", backgroundColor: "primary.dark", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"1px", padding:"0" }} />
                        <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'> {t("about_readmore_text1")}</Typography>
                        <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_readmore_text2")}</Typography>
                        <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_readmore_text3")}</Typography>
                        <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_readmore_text4")}</Typography>
                        <Typography sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_readmore_text5")}</Typography>
                      </div>
                  
                  </Stack>
                  </Box>
                </Fade>
              </Modal>
      </Stack>
    </section>
  )
}

export default About