import React from 'react'
import { Collapse, Container, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <section style={{width:"100%", backgroundColor: "white"}}>
    <Stack  direction="row" justifyContent="center" spacing={2} sx={{ overflowX: "clip", marginBottom:{sm:"0",md:"50px",lg:"180px"}, marginTop:{sm:"0",md:"50px", lg:"0"}}}>

            <Stack component={motion.div} zIndex={1} sx={{ overflowX: "clip", marginTop:{ md:"0", lg:"-50px"}}}
              initial={Stack1Anim.initial}
              animate={Stack1Anim.animate}
              transition={Stack1Anim.transition}
            >
              <Stack backgroundColor={"#040e2d"} pt={"70px"} pb={"50px"} pr={"50px"} pl={"50px"} width={"600px"} sx={{width:{md:"1000px", lg:'600px'}, marginRight:{md:0, lg:2}}}>
                <Typography color="secondary" mb={"20px"} sx={{ fontWeight: "600"}}>INSTITUT</Typography>
                <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600",textTransform:"uppercase", lineHeight: "1.2em", letterSpacing:"7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}}>{t("wer_sind_wir")}</Typography>
                <div style={{position: "relative", marginBottom: "10px"}}>
                  
                  <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"} }} />
                  <Typography mb={"0.9rem"} sx={{marginLeft:{xs: "0", sm: "60px"}, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'> {t("about_text1")} </Typography>
                  <Typography mb={"0.9rem"} sx={{marginLeft:{xs: "0", sm: "60px"}, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_text2")}</Typography>
                  <Typography mb={"20px"} sx={{marginLeft:{xs: "0", sm: "60px"}, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_text3")}</Typography>

                  <Collapse in={checked}>
                    <Typography mb={"20px"} sx={{marginLeft:{xs: "0", sm: "60px"}, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>{t("about_text4")}</Typography>
                  </Collapse>

                  <Stack direction="row" justifyContent="flex-start" alignItems="center" onClick={handleChange} sx={{"&:hover": {cursor:"pointer"}}}>
                    <Typography variant='button' color="secondary" sx={{marginLeft:{xs: "0", sm: "60px"}, fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
                    <IconButton aria-label="delete" color="secondary" >
                      <KeyboardArrowDownIcon sx={{rotate: checked?"180deg": "0deg"}}/>
                    </IconButton>
                  </Stack>
                </div>
                
              </Stack>
            </Stack>


            <Stack mt={"-50px"} component={motion.div} zIndex={0} sx={{ overflowX: "clip", display:{xs:"none", md:"none" , lg:"block"} }}
              initial={{ x:500, opacity: 0}}
              animate={{ x:0, opacity: 1}}
              transition={{ duration: 1.5, type: "just", delay: 0.6 }}
            >
              <img src='https://picsum.photos/858/904' alt="about pic" style={{width: "611px", height: "auto", marginTop: "50px"}}/>
            </Stack>
      </Stack>
      </section>
  )
}

export default About