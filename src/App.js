import React from 'react'
import { Route, Routes } from  'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const theme = createTheme({
  palette: {
    primary: {
      light: '#3d417b',
      main: '#0b1b4e',
      dark: '#000026',
      contrastText: '#fff',
    },
    secondary: {
      light: '#daebff',
      main: '#a7b9ff',
      dark: '#7589cc',
      contrastText: '#000',
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