import { Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Numbers = () => {

    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

    const {t} = useTranslation();
     
  return (

    <section style={{ backgroundColor: "#00000085", width: "100%"}}>
        <Stack direction={largeScreen?"row":"column"}  justifyContent="space-evenly" alignItems="center" spacing={4} sx={{minHeight: "400px", maxHeight: "1400px"} } px={7} py={3}>
            <Stack  direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"primary.light", textShadow: "3px 5px 2px rgba(0,0,0,0.4)", fontSize:{xs:"30px", sm:"35px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={10} decimals={0} duration={1.2} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary.light" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", textTransform:"uppercase", fontSize:{xs:"1.25rem!important",sm:"1.5rem!important", xl:"2rem!important"}, marginBottom: {sm:0, md:i18n.language === "ar" ? "0":"38px!important"}}}>{t("numbers1.1")}<br/>{t("numbers1.2")}</Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"primary.light", textShadow: "3px 5px 2px rgba(0,0,0,0.4)", fontSize:{xs:"30px", sm:"35px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={6} decimals={0} duration={1.2} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary.light" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", textTransform:"uppercase", fontSize:{xs:"1.25rem!important",sm:"1.5rem!important", xl:"2rem!important"}, marginBottom: {sm:0, md:"38px!important"}}}>{t("numbers2")}<br/></Typography>
            </Stack>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{color:"primary.light", textShadow: "3px 5px 2px rgba(0,0,0,0.4)", fontSize:{xs:"30px", sm:"35px", md:"50px", xl:"75px"}, fontWeight:"600"}}>
                <CountUp end={17} decimals={0} duration={1.2} enableScrollSpy={1} style={{textAlign:"center"}}/>
                <Typography color="primary.light" sx={{lineHeight: "1.2em", letterSpacing:"1px", textAlign:"center", textTransform:"uppercase", fontSize:{xs:"1.25rem!important",sm:"1.5rem!important", xl:"2rem!important"}, marginBottom: {sm:0, md:"38px!important"}}} >{t("numbers3")}<br/></Typography>
            </Stack>
        </Stack>
    </section>
  )
}

export default Numbers