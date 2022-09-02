import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section5 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"50px", paddingBottom:"50px"}}>
      
    <Stack direction="row" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "clip"}}>
        <Stack xs={6} justifyContent="center" width={"100%"} sx={{ zIndex:"1", position: "relative"}}>
          <Box sx={{backgroundColor: "#daebff", padding:{md:"70px 20px 20px 50px", lg:"70px 50px 50px 50px"}, maxWidth: "1400px", position: "absolute", right: {md:"0",lg:"-20%"}, marginLeft: {md:"0",lg:"50px"}, marginTop:"250px"}}>

            <Typography  color="primary" mb={"20px"} sx={{ fontWeight: "600", lineHeight:"1"}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1, type: "just"}}
              viewport={{ once: true }}
            >FINANZDIENSTLEISTUNG</Typography>

            <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1,delay: 0.2, type: "just"}}
              viewport={{ once: true }}
            >FINANCIAL SERVICES</Typography>

            <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"} }} />
              <Typography mb={"0.9rem"}  sx={{marginLeft:{xs: "0", sm: "60px"},overflowWrap: "normal", fontSize: "15px" , color: "black"}} variant='body1'>Die DEUTSCHE FINANCE GROUP verfügt über langjährige Erfahrung in der Finanzdienstleistung und über eine exzellente Fachkompetenz im Bereich der institutionellen Kapitalanlage. Zur Kernkompetenz im Bereich Financial Services gehört das Marketing- und die Platzierung von institutionellen Finanzstrategien bei privaten, professionellen und institutionellen Investoren. </Typography>
              <Typography variant='button' color="primary" sx={{marginLeft:{xs: "0", sm: "60px"},fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
            </motion.div>
          </Box>
        </Stack>

        <Stack width={"80%"} sx={{overflowX: "hidden", display:{xs:"none", md:"none" , lg:"block"}}}>
          <img src='https://picsum.photos/700/550' alt="section3pic" style={{height: "550px", objectFit: "cover"}}/>
        </Stack>

    </Stack>

  </section>
  )
}

export default Section5