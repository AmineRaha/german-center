import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section5 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"50px", paddingBottom:"50px"}}>
    <Stack direction="row" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "clip"}}>
      
        <Stack xs={6} direction="row" justifyContent="flex-end" alignItems="center" width={"100%"} sx={{ zIndex:"1", position: "relative", marginRight: {md:"0",lg:"-20%" }}}>
        <div style={{backgroundColor: "#daebff", padding:"70px 50px 50px 50px", maxWidth: "1400px", marginRight:{md:"0",lg:"50px" }}}>


            <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1,delay: 0.2, type: "just"}}
              viewport={{ once: true }}
            >Für Unternehmen</Typography>

            <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
            >
              <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"} }} />
              <Typography mb={"0.9rem"}  sx={{marginLeft:{xs: "0", sm: "60px"},overflowWrap: "normal", fontSize: "15px" , color: "black"}} variant='body1'>Das Belatel Institut verfügt über beste Kontakte zu Bewerbern und Unternehmen im In und Ausland.</Typography>
              <Typography variant='button' color="primary" sx={{marginLeft:{xs: "0", sm: "60px"},fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
            </motion.div>
          </div>
        </Stack>

        <Stack width={"80%"} sx={{overflowX: "hidden", display:{xs:"none", md:"none" , lg:"block"}}}>
          <img src='https://picsum.photos/700/550' alt="section3pic" style={{height: "550px",width:"100%", objectFit: "cover"}}/>
        </Stack>

    </Stack>

  </section>
  )
}

export default Section5