import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "#040e2d", paddingTop:"50px"}}>
        <Stack direction="column" justifyContent="space-evenly" spacing={0} p={5} sx={{ overflowX: "visible"}}>
            <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px", fontSize:{xs:"1.5rem", sm:"2rem", md:"3rem"}}} component={motion.div}
                initial={{ y:40, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1, type: "just"}}
                viewport={{ once: true }}
            >IMMOBILIEN INVESTMENTS</Typography>
            <Stack>
                <motion.div style={{position: "relative", marginBottom: "10px"}}
                initial={{ y:50, opacity: 0}}
                whileInView={{ y:0, opacity: 1}}
                transition={{ duration: 1,delay: 0.2, type: "just"}}
                viewport={{ once: true }}
                >
                <Container sx={{ position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px", display:{xs:"none", sm:"block"} }} />
                <Typography mb={"20px"} sx={{ marginLeft:{xs: "0", sm: "60px"}, overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>Alternative Immobilienarten wie Health Care, Student Housing oder der Sektor Logistik erfahren im Rahmen der internationalen Investitionsstrategie ein zunehmendes Interesse von institutionellen Investoren. Des Weiteren zählen insbesondere Lab-Offices aufgrund der seit Jahren weltweit steigenden Forschungsaktivitäten von Impfstoffen und Arzneimitteln zu der wachsenden alternativen Assetklasse „Life-Science Immobilien“ und gelten bei institutionellen Investoren als ein Immobilieninvestment der Zukunft. Welche wesentliche Position die wachsende neue Assetklasse „Lab-Offices“ in einem zukunftsorientierten Anlageportfolio für Investoren einnimmt, darüber spricht Prof. Dr. John Davidson, Group Research Officer der DEUTSCHE FINANCE GROUP.</Typography>
                <Typography variant='button' color="secondary" sx={{marginLeft:{xs: "0", sm: "60px"}, fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>Interview</Typography>
                </motion.div>
            </Stack>
            
        </Stack>
    </section>
  )
}

export default Section4