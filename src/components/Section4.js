import React from 'react'
import { Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section4 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "black", paddingTop:"50px"}}>
        <Stack direction="column" justifyContent="space-evenly" spacing={0} p={5} sx={{ overflowX: "visible"}}>
            <Typography variant='h3' mb={"30px"} sx={{color: "white", fontWeight: "600", lineHeight: "1.2em", letterSpacing:"7px"}} component={motion.div}
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
                    <div  style={{ content: "", position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px"}}></div>
                    <Typography ml={"60px"} mb={"20px"} sx={{overflowWrap: "normal", fontSize: "15px", color: "white"}} variant='body1'>Alternative Immobilienarten wie Health Care, Student Housing oder der Sektor Logistik erfahren im Rahmen der internationalen Investitionsstrategie ein zunehmendes Interesse von institutionellen Investoren. Des Weiteren zählen insbesondere Lab-Offices aufgrund der seit Jahren weltweit steigenden Forschungsaktivitäten von Impfstoffen und Arzneimitteln zu der wachsenden alternativen Assetklasse „Life-Science Immobilien“ und gelten bei institutionellen Investoren als ein Immobilieninvestment der Zukunft. Welche wesentliche Position die wachsende neue Assetklasse „Lab-Offices“ in einem zukunftsorientierten Anlageportfolio für Investoren einnimmt, darüber spricht Prof. Dr. John Davidson, Group Research Officer der DEUTSCHE FINANCE GROUP.</Typography>
                    <Typography ml={"60px"} variant='button' color="primary" sx={{fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>Interview</Typography>
                </motion.div>
            </Stack>
            
        </Stack>
    </section>
  )
}

export default Section4