import React from 'react'
import { Backdrop, Box, Container, Fade, IconButton, Modal, Stack, Typography } from '@mui/material'
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Section3 = () => {

  const {t} = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs:"100%", sm:"90%",md:"80%" },
    bgcolor: '#040e2d',
    border: '0',
    
    boxShadow: 24,
    p: {xs:1, sm:2, md:4},
    direction: i18n.language === "ar" ? "rtl" : "ltr"
  };

  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"95px", paddingBottom:"70px"}}>
      <Stack direction="row" justifyContent="space-evenly" spacing={0}  sx={{ overflowX: "clip", paddingTop:{md:'0px',lg:"70px"}, paddingBottom:{md:'20px', lg:"70px"}}}>

          <Stack width={"80%"} sx={{display:{xs:"none", md:"none" , lg:"block"}}}>
            <img src='https://picsum.photos/700/550' alt="section3pic" style={{height: "550px", width:"100%",objectFit: "cover"}}/>
          </Stack>

          <Stack xs={12} justifyContent="center" width={"100%"} sx={{ zIndex:"1", marginLeft: {md:"0",lg:"-20%" }, direction: i18n.language === "ar" ? "rtl" : "ltr"}}>
            <div style={{backgroundColor: "#daebff", padding:"70px 50px 50px 50px", maxWidth: "1400px", marginRight:{md:"0",lg:"50px" }}}>

              <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap:"break-word"}} component={motion.div}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
              >{t("section3_title")}</Typography>

              <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.4, type: "just"}}
                viewport={{ once: true }}
              >
                <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"}, marginTop:"6px" }} />
                <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "black"}} variant='body1'> {t("section3_text1")} </Typography>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleOpen} sx={{"&:hover": {cursor:"pointer"}}}>
                      <Typography variant='button' color="primary" sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("read_more")}</Typography>
                      <IconButton aria-label="delete" color="primary" >
                        <KeyboardArrowDownIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
                      </IconButton>
                </Stack>
              </motion.div>
            </div>
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
                    <Stack backgroundColor={"#040e2d"} pt={"20px"} pb={"20px"} pr={"30px"} pl={"20px"} sx={{width:"100%", marginRight:{md:0, lg:2}}}>

                      <div style={{position: "relative", marginBottom: "10px"}}>
                        <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"}, marginTop:"6px" }} />
                        <Typography mb={"0.9rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'> {t("section3_readmore_text1")}</Typography>
                        <Typography mb={"0"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: "17px", color: "white"}} variant='body1'>{t("section3_readmore_text2")}</Typography>
                      </div>
                  
                  </Stack>
                  </Box>
                </Fade>
            </Modal>

      </Stack>

    </section>
  )
}

export default Section3