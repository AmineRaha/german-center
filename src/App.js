import React from 'react'
import { Route, Routes } from  'react-router-dom';
import { Box, createTheme, ThemeProvider } from "@mui/material";

import Home from './pages/Home';
import Navbar from './components/Navbar';


const theme = createTheme({
  palette: {
    primary: {
      light: '#e1eff7',
      main: '#afbdc4',
      dark: '#808d94',
      contrastText: '#000',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </ThemeProvider>
  )
}

export default App