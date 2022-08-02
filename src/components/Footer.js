import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <section style={{width:"100%", backgroundColor: "black", paddingTop:"40px", paddingBottom:"10px", height:"30vh"}}>

        <Stack justifyContent={"space-around"} alignItems={"center"} height={"100%"} mx={5}>

            <Stack sx={{color:" white", width:"100%"}} direction={"row" }justifyContent={"space-around"} alignItems={"center"}>

                <Stack sx={{width:"100%"}}>
                    <Typography variant='h3' sx={{fontSize:"14px", fontWeight:"600", lineHeight:"1rem", letterSpacing:"3px", marginBottom:"20px"}}>Kontakt</Typography>
                    <Typography variant='h3' sx={{fontSize:"12px", fontWeight:"400", lineHeight:"1rem", letterSpacing:"3px"}}>Leopoldstraße 156<br/>80804 München<br/>Telefon: +49 (0) 89 – 64 95 63 – 0<br/>Telefax: +49 (0) 89 – 64 95 63 – 10</Typography>
                </Stack>

                <Stack sx={{textAlign:"center", width:"100%"}}>
                    Centre name
                </Stack>

                <Stack sx={{textAlign:"right", width:"100%"}}>
                    Social media
                </Stack>

            </Stack>

            <Stack sx={{color:" white", marginTop:"20px"}}>
                copyright
            </Stack>

        </Stack>

    </section>
  )
}

export default Footer