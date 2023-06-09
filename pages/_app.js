//import npm packages
import React, { useState, useEffect } from 'react';
import { Mulish } from '@next/font/google';

//import next js packages
// import Head from 'next/head';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
  

//import styles
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Gs from '../styles/theme.config';

// Parallax 
import { ParallaxProvider  } from 'react-scroll-parallax';

//import components
import Header from '../components/header';
import Script from 'next/script';

//fonts declaration
const mulish = Mulish({
  weight: ['200', '300', '400', '500', '700'],
  variable: '--mulish-font',
  display: 'swap',
  preload: false,
});

export default function MyApp({ Component, pageProps }) {
  const [isDark, setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);
  const [isMobile, setIsMobile] = useState(false); 
 
  return (
    <> 

<style jsx global>{`
        :root {
          --mulish-font: ${mulish.style.fontFamily}; 
        }
      `}</style>

    <ParallaxProvider>
      <ThemeProvider theme={selectedTheme}>
        <Gs.GlobalStyle /> 
        <Header
            isDarkTheme={isDark}
            setDarkTheme={(value) => setDarkTheme(value)}
          /> 
                <Component
                  {...pageProps}
                  isDarkTheme={isDark} 
                  isMobile={isMobile}
                /> 
      </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

