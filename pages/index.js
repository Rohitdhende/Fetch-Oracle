import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
// import {Zoom, Fade } from 'react-reveal'; 
import Media from '../styles/media-breackpoint';
import { useRef } from 'react';
import Image from 'next/image'; 
import HomeContent from '../components/HomeMainPage'

 
// Parallax 
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';

import ScrollContainer from "../components/ScrollContainer";


//import api 
import Head from 'next/head';


const Home = (props) => {
  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  const [startScrollTest, setStartScrollTest] = useState(0);
  const [isMobile, setisMobile] = useState(false);
  const videoEl = useRef(null);

  const [isWideScreen, setIsWideScreen] = useState(true);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  }; 

  useEffect(() => {
    attemptPlay();
    function handleResize() {
      setIsWideScreen(window.innerWidth > 767)
    } 
    window.addEventListener('resize', handleResize)
    handleResize() 
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href);
    }
  }, [location]);

  return (  
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <title>Fetch Oracle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="keywords" content="Fetch Oracle" />
        <meta name="description" content="Fetch Oracle" />
        <link rel="canonical" href={location} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
      </Head> 

  
      {isWideScreen ? (
        <ScrollContainer>
          <HomeContent />  
        
        </ScrollContainer>
      ) : (
        <HomeContent />
      )}
  
   
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .title01{ font-weight:700; font-size:65px; letter-spacing:-2px; color:#fff;
  &.v2{text-align:left;}
  }
  .text01{ font-size:24px; line-height:40px; text-align:center; font-weight:200; color:#fff;   max-width:540px ; 
  &.v2{text-align:left;}
  }

  .txtCenter{ text-align:center;}
 
 
`;
 

export default Home;
