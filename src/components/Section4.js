import React from 'react'
import { Container, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, IconButton, Link, Modal, Fade, Backdrop, Button } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Box } from '@mui/system';

const Section4 = () => {

  const {t} = useTranslation();

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
    bgcolor: '#040e2d',
    border: '0',
    width:"99vw",
    
    boxShadow: 24,
    p: {xs:1, sm:2, md:4},
    direction: i18n.language === "ar" ? "rtl" : "ltr"
  };


  return (
    <section style={{width:"100%", backgroundColor: "#040e2d", paddingTop:"50px"}}>
        <Stack direction="column" justifyContent="space-evenly" spacing={0} p={5} sx={{ overflowX: "visible", direction: i18n.language === "ar" ? "rtl" : "ltr", overflowWrap:"anywhere"}} component={motion.div}
          viewport={{ once: true }}
          variants={parentVarient}
          whileInView="visible"
        >
          <Typography  color="secondary" mb={"20px"} sx={{ fontWeight: "600", lineHeight:"1", textTransform:"uppercase"}} component={motion.div}
              variants={childVarient}
            
            >
              {t("section4_title1")}
            </Typography>
          <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", textTransform: "uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap:"anywhere"}} component={motion.div}
               variants={childVarient}
             
          >{t("section4_title2")}</Typography>
          <Stack>
            <motion.div style={{position: "relative", marginBottom: "10px"}}
             component={motion.div}
             variants={childVarient}
           
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"}, marginTop:"6px" }} />
              <Typography mb={"1.5rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'> {t("section4_text1")} </Typography>
              


            </motion.div>
          </Stack>
          <Stack  sx={{alignItems:"center"}}>
            <Typography sx={{ marginY:"1rem", overflowWrap: "normal", fontSize: i18n.language === "ar" ? {xs:"20px",sm:"25px",md:"40px"}: {xs:"20px",sm:"25px",md:"40px"} , fontWeight:"bold", color: "white", textAlign:"center"}} variant='body1' component={motion.div}
              variants={childVarient}
            > {t("section4_text2")} </Typography>
          </Stack>
          <motion.div
          >
            <Accordion sx={{backgroundColor: "#040e2d", color:"white", paddingX:"0"}} component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q1")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a1")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}} component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a2")}
                </Typography>
                <ul style={{listStyleType:"decimal", marginLeft:"30px"}}>
                  <li>
                    <Typography >
                      {t("section4_a2_1")}
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      {t("section4_a2_2")}
                    </Typography>
                  </li>
                </ul>

              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}} component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q3")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a3")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}} component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q4")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a4")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}}  component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q5")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a5_1")} <br/> {t("section4_a5_2")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}}  component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q6")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a6")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}}  component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q7")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a7_1")} <br/> {t("section4_a7_2")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}} component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q8")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a8_1")}
                </Typography>
                <List dense={false}>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_2")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_3")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_4")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_5")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_6")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_7")}
                    />
                  </ListItem>

                  <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                    <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                      <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t("section4_a8_8")}
                    />
                  </ListItem>

                </List>
  
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{backgroundColor: "#040e2d", color:"white"}}  component={motion.div}
              variants={childVarient}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"white"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingX:"0"}}
              >
                <Typography sx={{fontWeight:"600", textTransform:"uppercase"}}>{t("section4_q9")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {t("section4_a9")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ marginTop:"1rem"}} component={motion.div}
              variants={childVarient}
              >
              <Link href="https://www.bmi.bund.de/SharedDocs/faqs/DE/themen/migration/fachkraefteeinwanderung/faqs-fachkraefteeinwanderungsgesetz.html" target={"_blank"}>
                <Typography variant='button' color="white" sx={{ textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("source")}</Typography>
                <IconButton sx={{color:"white"}} >
                  <LaunchIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
                </IconButton>
              </Link>
            </Stack>

            <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleOpen} sx={{"&:hover": {cursor:"pointer"}}} component={motion.div}
              variants={childVarient}
              >
              <Typography variant='button' color="secondary" sx={{textTransform:"uppercase", fontSize: i18n.language === "ar" ? "20px":"16px", fontWeight:"500", letterSpacing: i18n.language === "ar" ? "0px" : "3px"}}>{t("reports")}</Typography>
              <IconButton color="secondary" >
                <KeyboardArrowDownIcon sx={{rotate: i18n.language === "ar" ? "90deg" : "-90deg"}}/>
              </IconButton>
            </Stack>

          </motion.div>

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
                    
                    <Stack backgroundColor={"#040e2d"} pt={"20px"} pb={"20px"} pr={"30px"} pl={"20px"} sx={{width:"100%", marginRight:{md:0, lg:2}}}>

                    <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", textTransform:"uppercase", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", fontSize:{xs:"1.25rem", sm:"1.75rem", md:"2rem"}, overflowWrap: "anywhere"}}>{t("reports")}</Typography>

                    <List dense={false} sx={{color:"white"}}>

                      <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                        <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                          <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                        </ListItemIcon>
                        <ListItemText sx={{ textAlign: i18n.language === "ar" ? "right" : "left"}}
                          primary={<>
                            <Typography>
                              {t("reports_text1")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text2")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text3")} <br/>
                            </Typography>

                            <Typography>
                              {t("reports_text4")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text5")} <br/>
                            </Typography>

                            <Typography>
                              {t("reports_text6")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text7")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text8")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text9")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text10")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text11")} <br/>
                            </Typography>

                          </>}
                        />
                      </ListItem>

                      <ListItem alignItems="flex-start" sx={{paddingY:"0"}}>
                        <ListItemIcon sx={{minWidth:"15px", marginTop:"13px"}}>
                          <CircleIcon sx={{color:"white", fontSize:"7px"}} />
                        </ListItemIcon>
                        <ListItemText sx={{ textAlign: i18n.language === "ar" ? "right" : "left"}}
                          primary={<>
                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text12")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text13")} <br/>
                            </Typography>

                            <Typography sx={{marginBottom:"1rem"}}>
                              {t("reports_text14")} <br/>
                            </Typography>

                            <Typography>
                              {t("reports_text15")} <br/>
                            </Typography>
                          </>}
                        />
                      </ListItem>

                    </List>
                  
                  </Stack>
                  </Fade>
                  </Box>
                </Box>
                
            </Modal>

            
        </Stack>
    </section>
  )
}

export default Section4