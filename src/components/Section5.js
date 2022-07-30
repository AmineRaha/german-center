import React from 'react'
import { Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section5 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"50px", paddingBottom:"70px"}}>
    <Stack direction="row-reverse" justifyContent="space-evenly" spacing={0} py={5} sx={{ overflowX: "visible"}}>

        <Stack width={"80%"}>
        <img src='https://picsum.photos/700/550' alt="section3pic" style={{height: "550px"}}/>
        </Stack>

        <Stack xs={6} justifyContent="center" width={"100%"} sx={{ zIndex:"1", marginRight: "-20%", marginLeft: "30%" }}>
          <div style={{backgroundColor: "#eeeded", padding:"70px 50px 50px 50px", width: "650px"}}>

            <Typography  color="secondary" mb={"20px"} sx={{ fontWeight: "600", lineHeight:"1"}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1, type: "just"}}
              viewport={{ once: true }}
            >FINANZDIENSTLEISTUNG</Typography>

            <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600",fontSize: "46px", lineHeight: "1.2em", letterSpacing:"7px"}} component={motion.div}
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
              <div  style={{ content: "", position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px"}}></div>
              <Typography ml={"60px"} mb={"0.9rem"}  sx={{overflowWrap: "normal", fontSize: "15px" , color: "black"}} variant='body1'>Die DEUTSCHE FINANCE GROUP verfügt über langjährige Erfahrung in der Finanzdienstleistung und über eine exzellente Fachkompetenz im Bereich der institutionellen Kapitalanlage. Zur Kernkompetenz im Bereich Financial Services gehört das Marketing- und die Platzierung von institutionellen Finanzstrategien bei privaten, professionellen und institutionellen Investoren. </Typography>
              <Typography ml={"60px"} variant='button' color="secondary" sx={{fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
            </motion.div>
          </div>
        </Stack>

    </Stack>

  </section>
  )
}

export default Section5