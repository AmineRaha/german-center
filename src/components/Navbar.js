import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Grid, Typography, Drawer, Button, ListItem, Box, List, useMediaQuery } from '@mui/material'
import Cookies from 'js-cookie';

import logo from "../assets/images/logo/logo.svg";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import './Navbar.scss';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const getList = () => (
      <div style={{ width: 400}} onClick={() => setOpen(false)}>

    
        <Grid container justifyContent="flex-end">
            <Typography variant='h4' sx={{ margin: 3}}>MENU</Typography>
        </Grid>

        <List>
            <ListItem >
                <Typography variant='h6'>ITEM</Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>ITEM</Typography>
            </ListItem>
            <ListItem>
                <Typography variant='h6'>ITEM</Typography>
            </ListItem>
        </List>


      </div>
    );

    const {t} = useTranslation();
    const currentLang=Cookies.get('i18next') || 'de';

    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <>
    <Box sx={{height: {md:"70px", lg:'80px',xl:"100px"}, position: { md:"static", lg:"fixed"}, padding: {xs:"0.5rem 0",md:"0.5rem 2rem"} }} style={{ width: "100%", background: "rgba(220, 220, 220, 0.25)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",border: "1px solid rgba(0, 0, 0, 0.18)", zIndex: 2}}>
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ gap: { sm: '122px', xs: "" }, paddingX:{xs:"0", md:"20px"} }} px="20px">
            <Link to="/" >
                <Box sx={{width: {xs:"150px",md:"200px", lg:"210px", xl:"250px"}}} style={{ height:'100%', margin: '0 20px'}}>
                    <img src={logo} alt="logo" style={{width: '100%', height:'100%', margin: '0',filter: "invert(8%) sepia(71%) saturate(593%) hue-rotate(334deg) brightness(92%) contrast(102%) drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4)" }} />
                </Box>
            </Link>
            
            <ul className='app__navbar-links right'>
                <li key="de" className={`app__flex p-text ${"de" === currentLang ? 'disabled' :""}`}><div />
                <Button sx={{fontSize:{xs:"15px" ,sm:"20px"}, textShadow: "1px 1px 5px rgba(0,0,0,0.2)"}}
                    onClick={() => i18n.changeLanguage('de')}
                    disabled={'de' === currentLang}
                >
                    {largeScreen?"Deutsch":"DE"}
                </Button>
                </li>
                <li key="ar" className={`app__flex p-text ${"ar" === currentLang ? 'disabled' : ""}`}><div />
                <Button sx={{fontSize:{xs:"15px" ,sm:"20px"}, textShadow: "1px 1px 5px rgba(0,0,0,0.2)"}}
                    onClick={() => i18n.changeLanguage('ar')}
                    disabled={'ar' === currentLang}
                    
                >
                    {largeScreen?"العربية":"AR"}
                </Button>
                </li>
            </ul>
            {/*<Button color='primary' variant='contained' onClick={() => setOpen(true)} p={0} sx={{height: "45px"}}><MenuIcon color="secondary" sx={{fontSize: "32px"}}/></Button>*/}
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} sx={{justifyContent: "flex-end"}}>
                {getList()}
            </Drawer>
        </Stack>
    </Box>

    </>
    
  )
}

export default Navbar