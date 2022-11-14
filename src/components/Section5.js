import React from 'react'
import { Backdrop, Box, Container, Fade, IconButton, Modal, Stack, Typography } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import bg from "../assets/images/pictures/_ABP3452.jpg";

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section5 = () => {

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
    bgcolor: 'primary.main',

    border: '0',
    borderRadius:"7px",
    '&:focus-visible': {
      outline: 'none',
    },

    width:{xs:"99vw",sm:"90vw",md:"80vw"},
    
    boxShadow: 24,
    p: {xs:1, sm:2, md:4},
    direction: i18n.language === "ar" ? "rtl" : "ltr"
  };

  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"50px", paddingBottom:"50px"}}>
    <Stack direction="row" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "clip"}}>
      
        <Stack xs={6}  direction="row" justifyContent="flex-end" alignItems="center" sx={{ width:{md:"auto", lg:"100%"}, zIndex:"1", position: "relative", marginRight: {md:"0",lg:"-20%" }, paddingY:"4rem"}}>
          <Box sx={{backgroundColor: "primary.main", padding:{xs:"25px", sm:"30px",md:"70px 50px 50px 50px"}, maxWidth: "1400px", minWidth:{sm:"auto", md:"1000px"}, borderRadius:"4px",boxShadow: "6px 5px 5px 0px rgb(0 0 0 / 15%)"}}>



          <Typography variant='h3' mb={"30px"} component={motion.div} initial={{ y:50, opacity: 0}} whileInView={{ y:0, opacity: 1}} transition={{ duration: 1,delay: 0.2, type: "just"}} viewport={{ once: true }}
            sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", textTransform: "uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap:"anywhere"}}
          >
              {t("section5_title")}
          </Typography>

            <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "secondary.dark", height: "2px", width:"15px", display:{xs:"block", sm:"block"}, marginTop:"1px", padding:"0" }} />
              <Typography mb={"0.9rem"}  sx={{marginLeft:{xs: "25px", sm: "60px"},overflowWrap: "normal", fontSize: "15px" , color: "black"}} variant='body1'>{t("section5_text")}.</Typography>
              <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleOpen} sx={{"&:hover": {cursor:"pointer"}}}>
                <Typography variant='button' color="secondary.dark" sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("read_more")}</Typography>
                <IconButton aria-label="delete" color="secondary" >
                  <KeyboardArrowDownIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
                </IconButton>
              </Stack>
            </motion.div>
          
          </Box>


        </Stack>

        <Stack width={"80%"} sx={{overflowX: "hidden", display:{xs:"none", md:"none" , lg:"block"} , backgroundImage: `url(${bg})`,backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          
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
                  <IconButton color="secondary" sx={{position:"absolute", right: i18n.language === "ar" ? "95%" : "2%"}} onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                <Fade in={open}>
                  
                  <Stack backgroundColor={"primary.main"} pt={"20px"} pb={"20px"} pr={"30px"} pl={"20px"} sx={{width:"100%", marginRight:{md:0, lg:2}}}>
                    <Typography variant='h3' mb={"30px"} sx={{color: "black", fontWeight: "600", textTransform:"uppercase", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap: "anywhere"}}>{t("section5_readmore_title")}</Typography>

                    <div style={{position: "relative", marginBottom: "10px"}}>
                      <Container sx={{ position: "absolute", top: "7px", backgroundColor: "secondary.dark", height: "2px", width:"45px", display:{xs:"none", sm:"block"}, marginTop:"6px" }} />
                      <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'> {t("section5_readmore_text1")}</Typography>
                      <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'>{t("section5_readmore_text2")}</Typography>
                      <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'>{t("section5_readmore_text3")}</Typography>
                      <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'>{t("section5_readmore_text4")}</Typography>
                      <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'>{t("section5_readmore_text5")}</Typography>
                      <Typography sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "black"}} variant='body1'>{t("section5_readmore_text6")}</Typography>
                    </div>
                  
                  </Stack>
                  
                  </Fade>
                  </Box>
                </Box>
                
          </Modal>

  </section>
  )
}

export default Section5