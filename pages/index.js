import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
// import {Zoom, Fade } from 'react-reveal'; 
import Media from '../styles/media-breackpoint';
import { useRef } from 'react';
import Image from 'next/image'; 


//lazy loading of components
import Footer from '../components/footer';
import BtnArrow from '../public/images/right-arrow.png'; 
import PulseChainGraph from '../components/PulseChainGraph'
 
import ICO01 from '../public/images/icon01.png';
import ICO02 from '../public/images/icon02.png';
import ICO03 from '../public/images/Globe-01.png';  
import AnimationICO01 from '../public/images/ani-ico-01.png';
import AnimationICO02 from '../public/images/ani-ico-02.png';
import AnimationICO03 from '../public/images/ani-ico-03.png';
import AnimationICO04 from '../public/images/ani-ico-04.png'; 
import AnimationICO05 from '../public/images/ani-ico-05.png';
import AnimationICO06 from '../public/images/ani-ico-06.png';
import AnimationICO07 from '../public/images/ani-ico-07.png';
import VideoBackground from '../public/images/video-bg.png';

 
// Parallax 
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';

import ScrollContainer from "../components/ScrollContainer";
// import ParallaxElement from "../components/ParllaxElement";

//import api 
import Head from 'next/head';


const Home = (props) => {
  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  const [startScrollTest, setStartScrollTest] = useState(0);
  const [isMobile, setisMobile] = useState(false);
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);


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
      <ScrollContainer>
        <HomeBG> 
          <BannerMBX>
            <BannerMBX02 >
              <BannSbx01 >
                <h1><span className="colorFull">This is Fetch.</span></h1>
                <p>A fully decentralized, transparent 
                  and permissionless oracle system. 
                  Powered by Tellor technology. 
                  Built natively for PulseChain.</p>
                <Link href='#' className='btn01'>Watch The Explainer</Link>
              </BannSbx01> 
            </BannerMBX02>
            <VideoBG>
            <video controls={false} loop autoPlay  src={"images/video/finalVideo.mp4"}  playsInline loop muted controls={false}  ref={videoEl} /></VideoBG>

            <Section className='v2'> 
              <RowMBX>
                <Parallax startScroll={800} endScroll={2800} className='RowBx01'
                  translateX={['-200px', '0px']}
                  opacity={['0', '1']}
                  easing='easeInOut' >
                  <ImgBx01> <img src={ICO01.src} alt='The Problem' /> </ImgBx01>
                  <h2 className="title01"><span className="colorFull">The Problem</span></h2>
                  <p className="text01">Oracles are essential for blockchain-based smart contract applications that require access to real time and real world data such as price feeds… but there is a problem… centralized points of on-chain data entry are increasingly vulnerable to manipulation, attack, and censorship.</p>
                </Parallax>
                <Parallax startScroll={800} endScroll={2800} className='RowBx02'
                  translateX={['200px', '0px']}
                  opacity={['0', '1']}
                  easing="easeInOut" >
                  <ImgBx01> <img src={ICO02.src} alt='The Solution' /> </ImgBx01>
                  <h2 className="title01"><span className="colorFull">The Solution</span></h2>
                  <p className="text01">Fetch is completely decentralized, immutable, and has no admin keys… there’s no whitelisting... no permission required... and it achieves true decentralization through an unrestricted, distributed network of anonymous Reporters who protect, verify and validate the submitted data.</p>
                </Parallax>
              </RowMBX>
               
              <Parallax  startScroll={3000} endScroll={4200}
                  translateY={['-100px', '0px']}
                  opacity={['0', '1']}
                  easing='easeInOut'
                  scale={[1.1, 1]}  >
              <RowWhiteBX> 
                <p>
                  This means you can <span>TRUST</span> the data your smart contract applications are relying on is <span>ACCURATE</span> and <span>SECURE...</span>Data that can be submitted by <span>ANYONE...</span> and checked by <span>EVERYONE</span>.
                </p> 
                <div className="Globe">
                  <Parallax startScroll={3200} endScroll={8200}
                    translateY={['100px', '-150px']}    >
                    <img src={ICO03.src} alt='' />
                  </Parallax>
                </div>
              </RowWhiteBX> 
              </Parallax>
            </Section>

            <Section>

                <h2 className="title01"><span className="colorFull">How It Works</span></h2>

                <ImgBx01 className="v1">
             <PulseChainGraph />
                </ImgBx01>
              
              
            </Section>

            <Section>

            <RowMBX className='v2'>
                <Parallax className='RowBx01 v2'>
                <h2 className="title01 v2"><span className="colorFull">FETCH Token</span></h2>
                <p className="text01 v2">The purpose of FETCH is to align incentives between users, data reporters, and the community of token holders. FETCH is used to fund contracts that provide payment to data reporters, which eliminates the need for off-chain payment agreements. Plus data submissions to the Fetch system are validated via economically rational community consensus. 
</p> 
                </Parallax>
                <Parallax className='RowBx02'>
                    <ImgBx01 className="v2">
                      <img src={AnimationICO01.src} alt='FETCH Token' />

                      <div className='anim_ICO01'> 
                      <Parallax  translateY={['-90px', '0px']} startScroll={9200} endScroll={11200} >  
                      <img src={AnimationICO02.src} alt='How It Works' />
                      </Parallax>
                      </div>
                      <div className='anim_ICO02'> 
                      <Parallax  translateY={['-120px', '0px']} startScroll={9200} endScroll={11200}>
                      <img src={AnimationICO03.src} alt='How It Works' />
                      </Parallax>
                      </div>
                      <div className='anim_ICO03'> 
                      <Parallax  translateY={['-150px', '0px']} startScroll={9200} endScroll={11200}>
                      <img src={AnimationICO04.src} alt='How It Works' />
                      </Parallax>
                      </div>
                    </ImgBx01>

                </Parallax>
              </RowMBX>
 
            </Section>

            <Section>

            <RowMBX className='v3'>
                <Parallax className='RowBx01 v2'>
                <ImgBx01 className='v3'>
                      <img src={AnimationICO05.src} alt='FETCH Token' />

                      <div className='anim_ICO01'> 
                      <Parallax  translateY={['-60px', '0px']} startScroll={12200} endScroll={13400} >  
                      <img src={AnimationICO06.src} alt='How It Works' />
                      </Parallax>
                      </div>
                      <div className='anim_ICO02'> 
                      <Parallax  translateY={['-120px', '0px']} startScroll={12700} endScroll={14200}>
                      <img src={AnimationICO07.src} alt='How It Works' />
                      </Parallax>
                      </div> 
                      </ImgBx01>
                
                </Parallax>
                <Parallax className='RowBx02 v2'>
                <h2 className="title01 v2"><span className="colorFull">On PulseChain</span></h2>
                <p className="text01 v2">Fetch is a truly decentralized, permissionless oracle system that offers unbeatable advantages and flexibility. It is built for the community, and powered by the community.</p>

                <p className="text01 v2">Are you ready to revolutionize the way data is published and accessed on PulseChain?</p>

                <p className="text01 v2">Don’t settle for anything less than true decentralization… join the movement.
</p> 
               

                </Parallax>
              </RowMBX>
 
            </Section>

          </BannerMBX>
           
        </HomeBG>
        <Footer />
      </ScrollContainer>

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

const HomeBG = styled.div` 
  background-repeat: no-repeat;
  background-position: top center; position: relative;  
  .bgFixer{ display:none !important;}        
  .colorFull{  background: -webkit-linear-gradient(0deg, #3894df, #0adad2, #2bf8b2);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;}
`;

const BannerMBX = styled(FlexDiv)` 
    width:100%; min-height:1249px;  position:relative ;  z-index:10; 
    align-items:flex-start ; 
`
const BannerMBX02 = styled(FlexDiv)` 
 min-height:100vh; width:100% ; max-width:1400px ; padding:0 25px; position:relative; z-index:20;

 ${Media.lg} {  padding:0 60px; }
`
const BannSbx01 = styled(FlexDiv)` 
    width:100%; max-width:930px; flex-direction:column ;

    h1{ font-weight:700; color:#fff;  font-size:84px; letter-spacing:-2px;}
   
    p{ font-weight:300; font-size:30px; color:#fff; text-align:center; letter-spacing:-1px; line-height:48px; margin-top:4px; text-shadow: 0 0 10px #000000; }

    ${Media.lg} {  h1{font-size:60px; line-height:46px; } }

    .btn01{position:relative; padding:12px 58px 12px 32px; font-size:25px; color:#196eed; display:inline-block;overflow:hidden; -webkit-box-shadow:0 4px 8px 2px rgba(0,0,0,0.02);box-shadow:0 4px 8px 2px rgba(0,0,0,0.02);border:0;outline:0; display:inline-block; position:relative;  transition: all 700ms ease-in-out; 
background: #fff; 
}
.btn01:after{display:block;width:28px;height:11px; background:url(${BtnArrow.src}) center top no-repeat ; content:"";border:none;position:absolute;right:14px;top:23px;  transition: all 500ms ease-in-out;}
.btn01:before{display:block;width:28px;height:11px;background:url(${BtnArrow.src}) center top no-repeat ;content:"";border:none;position:absolute;left:-100px;top:23px;  transition: all 500ms ease-in-out;}
.btn01:hover{padding:12px 32px 12px 58px; -webkit-box-shadow:0 8px 20px 2px rgba(0,0,0,0.1);box-shadow:0 8px 20px 2px rgba(0,0,0,0.1);}
.btn01:hover:after{right:-100px;  }
.btn01:hover:before{left:14px; background:url(${BtnArrow.src}) center top no-repeat ; } 
`
const BannSbx02 = styled(FlexDiv)` 
    width:50%;  position:relative ; 
    ${Media.lg} { img{ max-width:400px;}  }
`

const RotateIMGBX = styled(FlexDiv)` 
  position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);
  width:911px; height:911px ;
`

const Section = styled(FlexDiv)` 
width:100%;  max-width:1400px; margin:100px auto; position:relative; 
&.v1{margin-top:-50px;} 
&.v2{margin-top:40px;} 
`
const RowMBX = styled(FlexDiv)`  
 width:100%; align-items:flex-start; max-width:1400px ; padding:0 20px; margin:0 0 20px 0; position:relative;

 &.v2{ max-width:1200px; margin:0 auto;}
 &.v3{ max-width:1300px; margin:0 auto;}

 .RowBx01{  width:50%;  padding:0 15px 0 0; display: flex;  align-items: center; justify-content: center; flex-wrap: wrap;
  &.v2{ justify-content:flex-start;}
}
 .RowBx02{  width:50%;  padding:0 0 0 15px; display: flex;  align-items: center; justify-content: center; flex-wrap: wrap;
  &.v2{ justify-content:flex-start; padding-left:50px;}
 }
`
const ImgBx01 = styled(FlexDiv)` 
  width:100%;  position:relative;  z-index: 1;
  &.v1{margin-top:50px;}  
  &.v2{ max-width:385px; margin:0 0 0 auto;} 
  &.v3{ max-width:535px; margin:0 auto 0 0;}

  .anim_ICO01{ position:absolute; left:0; top:0; z-index:2}
  .anim_ICO02{ position:absolute; left:0; top:0; z-index:3}
  .anim_ICO03{ position:absolute; left:0; top:0; z-index:4} 
`
const VideoBG = styled(FlexDiv)`  
  width:100%; max-height:100vh; left:0; top:0; right:0; bottom:0; position:absolute; z-index:15;
  background:url(${VideoBackground.src}) center bottom no-repeat ; overflow:hidden; align-items:flex-end;
  
  video{ width:100%;  mix-blend-mode:lighten;}

`

const RowWhiteBX = styled(FlexDiv)` 
    background-color:#fff; padding:40px; width:100%; margin:100px auto 0 auto; max-width:1045px; position:relative; -webkit-box-shadow: 0 0 43px 5px rgba(0,0,0,0.2); box-shadow: 0 0 43px 5px rgba(0,0,0,0.2); 
    p{ font-size:27px; color:#196eed; text-align:center; line-height:44px; font-weight:400; span{ color:#0bc85f; } }

    .Globe{ position:absolute; width:157px; height:152px;   right: -82px;
    z-index: 2; bottom: -70px;}
` 


export default Home;
