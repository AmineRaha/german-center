import React from 'react'
import { Route, Routes } from  'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const theme = createTheme({
  palette: {
    primary: {
      light: '#efdcd5',
      main: '#bcaaa4',
      dark: '#8c7b75',
      contrastText: '#000000',
    },
    secondary: {
      light: '#7c5e57',
      main: '#4f342e',
      dark: '#260e04',
      contrastText: '#ffffff',
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
        <Footer/>
    </ThemeProvider>
  )
}

export default App