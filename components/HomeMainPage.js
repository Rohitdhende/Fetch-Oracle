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
import VideoBackground from '../public/images/video-bg.webp';


import MobileGraphIMG from '../public/images/Mobile-Graph.png';
 
// Parallax 
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';

 

//import api 
import Head from 'next/head';


const HomeContent = (props) => {
  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  const [startScrollTest, setStartScrollTest] = useState(0); 
  const videoEl = useRef(null); 
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  

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
        setIsMobileScreen(window.innerWidth < 769)
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
            <Parallax className='VideoBG'   opacity={[1, 0.1]}  startScroll={300} endScroll={2000}  easing="easeInQuad"  disabled={isMobileScreen}>

            <video controls={false} loop autoPlay  src={"images/video/finalVideo.mp4"}  playsInline  muted  ref={videoEl} />
            </Parallax> 
            
            <Section className='v2'> 
              <RowMBX>
                <Parallax startScroll={800} endScroll={2800} className='RowBx01'
                  translateX={['-200px', '0px']}
                  opacity={['0', '1']}
                  easing='easeInOut'  disabled={isMobileScreen}>
                  <ImgBx01> <Image src={ICO01} alt='The Problem' className='ICO-01'/> </ImgBx01>
                  <h2 className="title01"><span className="colorFull">The Problem</span></h2>
                  <p className="text01 mbFix01">Oracles are essential for blockchain-based smart contract applications that require access to real time and real world data such as price feeds… but there is a problem… centralized points of on-chain data entry are increasingly vulnerable to manipulation, attack, and censorship.</p>
                </Parallax>
                <Parallax startScroll={800} endScroll={2800} className='RowBx02'
                  translateX={['200px', '0px']}
                  opacity={['0', '1']}
                  easing="easeInOut"   disabled={isMobileScreen}>
                  <ImgBx01> <Image src={ICO02} alt='The Solution'  className='ICO-02'/> </ImgBx01>
                  <h2 className="title01"><span className="colorFull">The Solution</span></h2>
                  <p className="text01 mbFix01">Fetch is completely decentralized, immutable, and has no admin keys… there’s no whitelisting... no permission required... and it achieves true decentralization through an unrestricted, distributed network of anonymous Reporters who protect, verify and validate the submitted data.</p>
                </Parallax>
              </RowMBX>
               
              <Parallax  startScroll={3000} endScroll={4200}
                  translateY={['-100px', '0px']}
                  opacity={['0', '1']}
                  easing='easeInOut'
                  scale={[1.1, 1]}   disabled={isMobileScreen} >
              <RowWhiteBX> 
                <p>
                With Fetch Oracle you can <span>TRUST</span> the data your smart contract applications are relying on is <span>ACCURATE</span> and <span>SECURE...</span> data that can be submitted by <span>ANYONE...</span> and checked by <span>EVERYONE</span>.
                </p> 
                <div className="Globe">
                  <Parallax startScroll={3200} endScroll={8200}
                    translateY={['100px', '-150px']}   disabled={isMobileScreen}   >
                    <Image src={ICO03} alt='' />
                  </Parallax>
                </div>
              </RowWhiteBX> 
              </Parallax>
            </Section>

            <Section>

                <h2 className="title01"><span className="colorFull">How It Works</span></h2>

                <ImgBx01 className="v1">
                         <PulseChainGraph /> 
                         <Image src={MobileGraphIMG} alt='How It Works' className='MobileImgFix01' />
                </ImgBx01>
              
              
            </Section>

            <Section>

            <RowMBX className='v2'>
                <Parallax className='RowBx01 v2'>
                <h2 className="title01 v2"><span className="colorFull">FETCH Token</span></h2>
                <p className="text01 v2">The purpose of the FETCH token is to align incentives between users, data reporters, and the community of token holders. FETCH is used to fund contracts that provide payment to data reporters, which eliminates the need for off-chain payment agreements. Plus data submissions to the Fetch system are validated via economically rational community consensus. 
</p> 
                </Parallax>
                <Parallax className='RowBx02'>
                    <ImgBx01 className="v2">
                      <Image src={AnimationICO01} alt='FETCH Token'  priority={true}/>

                      <div className='anim_ICO01'> 
                      <Parallax  translateY={['-90px', '0px']} startScroll={9200} endScroll={11200}  disabled={isMobileScreen} >  
                      <Image src={AnimationICO02} alt='How It Works'  priority={true}/>
                      </Parallax>
                      </div>
                      <div className='anim_ICO02'> 
                      <Parallax  translateY={['-120px', '0px']} startScroll={9200} endScroll={11200}  disabled={isMobileScreen}>
                      <Image src={AnimationICO03} alt='How It Works'/>
                      </Parallax>
                      </div>
                      <div className='anim_ICO03'> 
                      <Parallax  translateY={['-150px', '0px']} startScroll={9200} endScroll={11200}  disabled={isMobileScreen}>
                      <Image src={AnimationICO04} alt='How It Works'/>
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
                      <Image src={AnimationICO05} alt='FETCH Token' />

                      <div className='anim_ICO01'> 
                      <Parallax  translateY={['-60px', '0px']} startScroll={12200} endScroll={13400}   disabled={isMobileScreen}>  
                      <Image src={AnimationICO06} alt='How It Works' />
                      </Parallax>
                      </div>
                      <div className='anim_ICO02'> 
                      <Parallax  translateY={['-120px', '0px']} startScroll={12700} endScroll={14200}  disabled={isMobileScreen}>
                      <Image src={AnimationICO07} alt='How It Works' />
                      </Parallax>
                      </div> 
                      </ImgBx01>
                
                </Parallax>
                <Parallax className='RowBx02 v2'>
                <h2 className="title01 v2"><span className="colorFull">On PulseChain</span></h2>
                <p className="text01 v2">Fetch is a truly decentralized, permissionless oracle system that offers unbeatable advantages and flexibility. It is built for the community, and powered by the community.</p>

                <p className="text01 v2">Are you ready to revolutionize the way data is published and accessed on PulseChain?</p>

                <p className="text01 v2">Don’t settle for anything less than true decentralization…  join the movement TODAY.
</p> 
               

                </Parallax>
              </RowMBX>
 
            </Section>
            <Section className="v3">
            <Link href='#' className='btn01'>Watch The Explainer---text01</Link>
            </Section>

          </BannerMBX>
           
        </HomeBG>
        <Footer /> 
 
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

  .MobileImgFix01{ display:none}

    .VideoBG{   width:100%; max-height:100vh; left:0; top:0; right:0; bottom:0; position:absolute; z-index:15;
  background:url(${VideoBackground.src}) center bottom no-repeat ; background-size:cover; overflow:hidden; align-items:flex-end;
  
  video{ width:100%;  mix-blend-mode:lighten;}}
  .btn01{position:relative; padding:12px 58px 12px 32px; font-size:25px; color:#08275D; border-radius:4px; display:inline-block;overflow:hidden; -webkit-box-shadow:0 4px 8px 2px rgba(0,0,0,0.2);box-shadow:0 4px 8px 2px rgba(0,0,0,0.2);border:0;outline:0; display:inline-block; position:relative;  transition: all 700ms ease-in-out; background: #3894df;
background: -moz-linear-gradient(45deg,  #3894df 0%, #0adad2 50%, #2bf8b2 100%);
background: -webkit-linear-gradient(45deg,  #3894df 0%,#0adad2 50%,#2bf8b2 100%);
background: linear-gradient(45deg,  #3894df 0%,#0adad2 50%,#2bf8b2 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3894df', endColorstr='#2bf8b2',GradientType=1 );

    }
    .btn01:after{display:block;width:28px;height:11px; background:url(${BtnArrow.src}) center top no-repeat ; content:"";border:none;position:absolute;right:14px;top:23px;  transition: all 500ms ease-in-out;}
    .btn01:before{display:block;width:28px;height:11px;background:url(${BtnArrow.src}) center top no-repeat ;content:"";border:none;position:absolute;left:-100px;top:23px;  transition: all 500ms ease-in-out;}
    .btn01:hover{padding:12px 32px 12px 58px; -webkit-box-shadow:0 8px 20px 2px rgba(0,0,0,0.4);box-shadow:0 8px 20px 2px rgba(0,0,0,0.4);
        background: -moz-linear-gradient(45deg,  #3894df 0%, #0adad2 20%, #2bf8b2 100%);
background: -webkit-linear-gradient(45deg,  #3894df 0%,#0adad2 20%,#2bf8b2 100%);
background: linear-gradient(45deg,  #3894df 0%,#0adad2 20%,#2bf8b2 100%); transition: all 700ms ease-in-out;  
 
    }
    .btn01:hover:after{right:-100px;  }
    .btn01:hover:before{left:14px; background:url(${BtnArrow.src}) center top no-repeat ; } 

    ${Media.xs} { 
        .btn01{ padding:8px 58px 8px 25px; font-size:18px;  
            :hover{padding:8px 25px 8px 58px;  } 
            } 
        .btn01:after, .btn01:before{ top:14px; } 
        }


 
  ${Media.md} { 
    .title01{font-size:50px;}
    .text01{ font-size:20px; line-height:32px;}
    .mbFix01{ font-size:20px; line-height:32px; padding:0 18px;}
   }
   ${Media.sm} {
    .title01, .text01 { &.v2 {text-align:center;}} 
    .MobileImgFix01{ display:block}
   }
   ${Media.sm} { .title01{font-size:38px;}}
`;

const HomeBG = styled.div` 
  background-repeat: no-repeat; overflow:hidden;
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
 ${Media.sm} {  padding:0 30px; }
 
`
const BannSbx01 = styled(FlexDiv)` 
    width:100%; max-width:930px; flex-direction:column ;

    h1{ font-weight:700; color:#fff;  font-size:90px; text-transform:uppercase; margin-bottom:25px; letter-spacing:-2px;}
   
    p{ font-weight:300; font-size:30px; color:#fff; text-align:center; letter-spacing:-1px; line-height:48px; margin-top:4px; text-shadow: 0 0 10px #000000; }

    ${Media.lg} {  h1{font-size:70px; line-height:60px; } }
    ${Media.sm} {  
        h1{font-size:50px; line-height:45px; margin-bottom:20px; } 
        p{ font-size:22px; line-height:36px; letter-spacing:0px;}
    }
    
 

    ${Media.xs} {  

        h1{font-size:40px; line-height:45px; margin-bottom:20px; } 
        p{ font-size:18px; line-height:30px; letter-spacing:0px;}
        }



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
&.v3{margin:0;} 

${Media.xs} {margin:30px auto; }


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

    ${Media.sm} { 
        .RowBx01, .RowBx02{  width:100%; padding:0 10px; &.v2{padding:0 10px; justify-content:center;} }
        &.v2{ flex-wrap:wrap-reverse;}
    }
    ${Media.xs} { 
        padding:0px;
        .RowBx01, .RowBx02{  padding:0; &.v2{padding:0 10px;} }


    }



`
const ImgBx01 = styled(FlexDiv)` 
  width:100%;  position:relative;  z-index: 1;
  &.v1{margin-top:50px;}  
  &.v2{ max-width:385px; margin:0;} 
  &.v3{ max-width:535px; margin:0 auto 0 0;}

  .anim_ICO01{ position:absolute; left:0; top:0; z-index:2}
  .anim_ICO02{ position:absolute; left:0; top:0; z-index:3}
  .anim_ICO03{ position:absolute; left:0; top:0; z-index:4} 


  ${Media.md} { 
        .ICO-01{ max-width:200px;}
        .ICO-02{ max-width:250px;}
        .CanvasGraph{ min-height:480px; padding: 0 30px;}
        &.v2{ max-width:250px; margin:0;} 
        &.v3{ max-width:400px; margin:30px 0 0 0;} 
   } 
`
// const VideoBG = styled(FlexDiv)`  


// `

const RowWhiteBX = styled(FlexDiv)` 
    background-color:#fff; padding:40px; width:100%; margin:100px auto 0 auto; max-width:1045px; position:relative; -webkit-box-shadow: 0 0 43px 5px rgba(0,0,0,0.2); box-shadow: 0 0 43px 5px rgba(0,0,0,0.2); 
    p{ font-size:27px; color:#196eed; text-align:center; line-height:44px; font-weight:400; span{ color:#0bc85f; } }

    .Globe{ position:absolute; width:157px; height:152px;   right: -82px;
    z-index: 2; bottom: -70px;}

    ${Media.md} {  padding:30px; max-width:900px;}
    ${Media.md2}{ max-width:640px; } 
    ${Media.sm}{ max-width:422px;   padding:20px;  p{ font-size:21px; line-height:36px; }} 
    ${Media.xs}{ max-width:290px;  }
` 


export default HomeContent;
