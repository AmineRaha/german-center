import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Menu, MenuItem, Grid, Typography, Drawer, Button, ListItem, ListItemIcon, ListItemText, Box, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../assets/images/logo.png";

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

  return (
    <>
    <Box sx={{height: {md:"80px", lg:'100px'}}} style={{ width: "100%", padding: "0.5rem 2rem", background: "rgba(220, 220, 220, 0.25)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",border: "1px solid rgba(0, 0, 0, 0.18)", position: "fixed",zIndex: 2}}>
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ gap: { sm: '122px', xs: "40px" } }} px="20px">
            <Link to="/" >
                <Box sx={{width: {md:"200px", lg:"260px"}}} style={{ height:'100%', margin: '0 20px'}}>
                    <img src={logo} alt="logo" style={{width: '100%', height:'100%', margin: '0 20px'}} />
                </Box>
            </Link>
            <Button color='primary' variant='contained' onClick={() => setOpen(true)} p={0} sx={{height: "45px"}}><MenuIcon color="secondary" sx={{fontSize: "32px"}}/></Button>
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} sx={{justifyContent: "flex-end"}}>
                {getList()}
            </Drawer>
        </Stack>
    </Box>

    </>
    
  )
}

export default Navbar