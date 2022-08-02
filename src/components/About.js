import React from 'react'
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { motion } from "framer-motion";


const About = () => {
  const isxl = useMediaQuery("(max-width:1536px)");
  const islg = useMediaQuery("(max-width:1200px)");
  const ismd = useMediaQuery("(max-width:900px)");

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
  

  return (
    <section style={{width:"100%", backgroundColor: "white"}}>
    <Stack  direction="row" justifyContent="center" spacing={2} sx={{ overflowX: "visible", marginBottom:{sm:"0",md:"50px",lg:"180px"}, marginTop:{sm:"0",md:"50px", lg:"0"}}}>

            <Stack component={motion.div} zIndex={1} sx={{ overflowX: "clip", marginTop:{ md:"0", lg:"-50px"}}}
              initial={Stack1Anim.initial}
              animate={Stack1Anim.animate}
              transition={Stack1Anim.transition}
            >
              <Stack backgroundColor={"black"} mr={2} pt={"70px"} pb={"50px"} pr={"50px"} pl={"50px"} width={"600px"} sx={{width:{md:"1000px", lg:'600px'}}}>
                <Typography color="primary" mb={"20px"} sx={{ fontWeight: "600"}}>GROUP</Typography>
                <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px"}}>DEUTSCHE <br/>FINANCE <br/>GROUP</Typography>
                <div style={{position: "relative", marginBottom: "10px"}}>
                  <div  style={{ content: "", position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px"}}></div>
                  <Typography ml={"60px"} mb={"0.9rem"}  sx={{overflowWrap: "normal", fontSize: "15px" , color: "white"}} variant='body1'>Die DEUTSCHE FINANCE GROUP ist eine internationale Investmentgesellschaft und bietet Investoren Zugang zu institutionellen Märkten und exklusiven Investments in den Bereichen Private Equity Real Estate, Immobilien und Infrastruktur.</Typography>
                  <Typography ml={"60px"} mb={"20px"} sx={{overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>Mit der DEUTSCHE FINANCE GROUP investieren Investoren seit über 17 Jahren verantwortungsvoll und erfolgreich in internationale Marktchancen- dort wo sie entstehen!</Typography>
                  <Typography ml={"60px"} variant='button' color="primary" sx={{fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
                </div>
                
              </Stack>
            </Stack>


            <Stack mt={"-50px"} component={motion.div} zIndex={0} sx={{ overflowX: "hidden", display:{xs:"none", md:"none" , lg:"block"} }}
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