import React from 'react'
import { Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Section6 = () => {
  return (
    <section style={{width:"100%", backgroundColor: "white", paddingTop:"20px", paddingBottom:"70px"}}>
    <Stack direction="row" justifyContent="center" spacing={0} py={5} sx={{ overflowX: "clip", height:"550px"}}>

        <Stack sx={{ width: {md:"30%", lg:"100%"}}}>
            <img src='https://picsum.photos/700/550' alt="section3pic" style={{height: "100%", objectFit: "cover"}}/>
        </Stack>

        <Stack justifyContent="center" width={"100%"} height={"100%"}>
          <div style={{backgroundColor: "#daebff", padding:"70px 50px 50px 50px", maxWidth: "1400px", height:"100%"}}>

            <Typography  color="primary" mb={"20px"} sx={{ fontWeight: "600", lineHeight:"1"}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1, type: "just"}}
              viewport={{ once: true }}
            >INVESTORENGRUPPEN</Typography>

            <Typography variant='h2' mb={"30px"} sx={{color: "black", fontWeight: "600",fontSize: "46px", lineHeight: "1.2em", letterSpacing:"7px"}} component={motion.div}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1,delay: 0.2, type: "just"}}
              viewport={{ once: true }}
            >NETZWERKE</Typography>

            <motion.div style={{position: "relative", marginBottom: "10px"}}
              initial={{ y:50, opacity: 0}}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1,delay: 0.4, type: "just"}}
              viewport={{ once: true }}
            >
              <div  style={{ content: "", position: "absolute", top: "7px", backgroundColor: "#808d94", height: "2px", width:"45px"}}></div>
              <Typography ml={"60px"} mb={"0.9rem"}  sx={{overflowWrap: "normal", fontSize: "15px" , color: "black"}} variant='body1'>Die DEUTSCHE FINANCE GROUP als internationale Investmentgesellschaft hat sich in ihrem institutionellen Netzwerk seit vielen Jahren als ein erfahrener und zuverlässiger institutioneller Investmentmanager etabliert. Institutionelle Investoren wie Pensionskassen, Versorgungswerke, Stiftungen und Universitäten nehmen daher den direkten Kontakt zur DEUTSCHE FINANCE GROUP für die Realisierung von interessanten und renditestarken Immobilienprojekten auf. </Typography>
              <Typography ml={"60px"} variant='button' color="primary" sx={{fontSize: "16px", fontWeight:"500", letterSpacing:"3px"}}>ERFAHREN SIE MEHR</Typography>
            </motion.div>
          </div>
        </Stack>

    </Stack>

  </section>
  )
}

export default Section6