import React from 'react'
import { Container, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section4 = () => {

  const {t} = useTranslation();

  const parentVarient={
    visible:{
        transition:{
            delay: 0.5,
            staggerChildren: 0.05,
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

  return (
    <section style={{width:"100%", backgroundColor: "#040e2d", paddingTop:"50px"}}>
        <Stack direction="column" justifyContent="space-evenly" spacing={0} p={5} sx={{ overflowX: "visible", direction: i18n.language === "ar" ? "rtl" : "ltr", overflowWrap:"anywhere"}}>
          <Typography  color="secondary" mb={"20px"} sx={{ fontWeight: "600", lineHeight:"1", textTransform:"uppercase"}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1, type: "just"}}
              viewport={{ once: true }}
            >
              {t("section4_title1")}
            </Typography>
          <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing: i18n.language === "ar" ? "0px" : "7px", textTransform: "uppercase", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}, overflowWrap:"anywhere"}} component={motion.div}
              initial={{ y:40, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1, type: "just"}}
              viewport={{ once: true }}
          >{t("section4_title2")}</Typography>
          <Stack>
            <motion.div style={{position: "relative", marginBottom: "10px"}}
            initial={{ y:40, opacity: 0}}
            whileInView={{ y:0, opacity: 1}}
            transition={{ duration: 1,delay: 0.1, type: "just"}}
            viewport={{ once: true }}
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"} }} />
              <Typography mb={"1.5rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'> {t("section4_text1")} </Typography>
              <Typography mb={"0.2rem"} sx={{marginLeft: i18n.language === "ar" ? 0 : {xs: "0", sm: "60px"}, marginRight: i18n.language === "ar" ? {xs: "0", sm: "60px"} : 0, overflowWrap: "normal", fontSize: i18n.language === "ar" ? "19px":"16px", color: "white"}} variant='body1'> {t("section4_text2")} </Typography>


            </motion.div>
          </Stack>

          <motion.div
            viewport={{ once: true }}
            variants={parentVarient}
            whileInView="visible"
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
                <Typography ml={3}>
                  {t("section4_a2_1")}
                </Typography>
                <Typography ml={3}>
                  {t("section4_a2_2")}
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
            
          </motion.div>


            
        </Stack>
    </section>
  )
}

export default Section4