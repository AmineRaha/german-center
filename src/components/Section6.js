import React from 'react'
import { Backdrop, Box, Container, Fade, IconButton, Modal, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import bg from "../assets/images/pictures/pic5.jpg";

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section6 = () => {

  const {t} = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalWrapper = {
    overflow:"auto",
    maxHeight:"100vh",
    display:"flex",
  };
  
  const modalBlock = {
    position:"relative",
    zIndex:0,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin:"auto",
    
  };
  

  const modalStyle = {
    position: 'relative',
    bgcolor: 'secondary.main',
    border: '0',
    width:{xs:"99vw",sm:"90vw",md:"80vw"},

    '&:focus-visible': {
      outline: 'none',
    },
    
    boxShadow: 24,
    p: {xs:1, sm:2, md:4},
    direction: i18n.language === "ar" ? "rtl" : "ltr"
  };

  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"20px", paddingBottom:"70px"}}>
    <Stack direction="row" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "clip"}}>

        <Stack sx={{ width: {md:"30%", lg:"100%"}, display:{xs:"none" , lg:"block"}, backgroundImage: `url(${bg})`,backgroundRepeat: "no-repeat",backgroundSize: "cover" }}>
        </Stack>

        <Stack xs={6} direction="row" justifyContent="flex-start" alignItems="center" width={"100%"} sx={{backgroundColor: "secondary.main", maxWidth: "1400px", direction: i18n.language === "ar" ? "rtl" : "ltr"}}>
          <Box sx={{backgroundColor: "secondary.main", padding:{xs:"25px", sm:"30px",md:"70px 50px 50px 50px"}, maxWidth: "1400px"}}>


          <Typography variant='h3' mb={"30px"} component={motion.div} initial={{ y:50, opacity: 0}} whileInView={{ y:0, opacity: 1}} transition={{ duration: 1,delay: 0.2, type: "just"}} viewport={{ once: true }}
            sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", textTransform: "uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap:"anywhere"}}
          >
              {t("section6_title")}
          </Typography>

            <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "primary.main", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"2px", padding:"0" }} />
              <Typography mb={"0.9rem"}  sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}}>{t("section6_text")}</Typography>
              <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleOpen} sx={{"&:hover": {cursor:"pointer"}}}>
                <Typography variant='button' color="primary" sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("read_more")}</Typography>
                <IconButton aria-label="delete" color="primary" >
                  <KeyboardArrowDownIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
                </IconButton>
              </Stack>
            </motion.div>
          </Box>
        </Stack>

    </Stack>

    <Modal 
              sx={modalWrapper}
              open={open}

              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >

              <Box sx={modalBlock}>
                <Box sx={modalStyle}>
                  <IconButton color="primary" sx={{position:"absolute", right: i18n.language === "ar" ? "95%" : "2%", top: "2%"}} onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                <Fade in={open}>
                    
                  <Stack backgroundColor={"secondary.main"} pt={"20px"} pb={"20px"} pr={"30px"} pl={"30px"} sx={{width:"100%", marginRight:{md:0, lg:2}}}>

                      <div style={{position: "relative", marginBottom: "10px"}}>
                        <Container sx={{ position: "absolute", top: "7px", backgroundColor: "primary.dark", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"3px", padding:"0" }} />
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text1")}</Typography>
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text2")}</Typography>
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text3")}</Typography>
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text4")}</Typography>
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text5")}</Typography>
                        <Typography mb={"0.9rem"}sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text6")}</Typography>
                        <Typography mb={"0"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "25px", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "25px", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section6_readmore_text7")}</Typography>
                      </div>

                  </Stack>
                
                  </Fade>
                  </Box>
                </Box>
                
          </Modal>


    </section>
  )
}

export default Section6