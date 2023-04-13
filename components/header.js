//import npm packags
import React, { useEffect, useRef, useState } from 'react'; 

//import next js packages
import Image from 'next/image';
import Link from 'next/link';

//import styles
import Gs from '../styles/theme.config';
import styled from 'styled-components';
// import { BiChevronDown, BiSun } from 'react-icons/bi';
// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import Media from '../styles/media-breackpoint';
 

//import Img
import LogoIMG from '../public/images/logo.svg';
import LogoIMG02 from '../public/images/logo-white.svg';
import Tele_ICO from '../public/images/telegram-ico.png';
import Twit_ICO from '../public/images/twitter-ico.png';
import GrunjPatt from '../public/images/texture.png';

import { useRouter } from 'next/router';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false); 
  const [headerClass, setHeaderClass] = useState(false);
  const [headerUp, setHeaderUp] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const { setDarkTheme, setIsDarkThemeDisabled } = props;
  const [ isSMenuDisabled, setIsSMenuDisabled ] = useState(true);
  const router = useRouter(); 
 

  const onInit = ({ state, style, node }) => {
    setIsOpen(false); 
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 1000) setHeaderClass(true);
    else setHeaderClass(false);
  };

 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
  }, []);
 

  return (
    <HeaderOuter className={[headerClass ? 'fly' : '']}>
        <Gs.Container> 
            <HeadMBX>
              <LogoBX> 
              <Image  src={LogoIMG02} alt='Fetch Oracle' /> 
              </LogoBX>
              <button className={'MMenu  ' + (isOpen3 ? 'active' : '')}
              onClick={() => setIsOpen3((state) => !state)}>
                <span></span> 
                <span></span> 
                <span></span> 
              </button>

              <NavigationBX className={(isOpen3 ? 'active' : '')}> 
                <Link href="#" onClick={() => setIsOpen3((state) => false)}>Knowledge</Link>         
                <Link href="#" onClick={() => setIsOpen3((state) => false)}>Whitepaper</Link>   
                <Link href="#" onClick={() => setIsOpen3((state) => false)} className='icoLink'><Image src={Twit_ICO} alt='twitter' /> </Link>  
                <Link href="#" onClick={() => setIsOpen3((state) => false)} className='icoLink'><Image src={Tele_ICO} alt='telegram' /> </Link>   
              </NavigationBX>
            </HeadMBX>   
        </Gs.Container>
     </HeaderOuter>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .hide-Desktop{ display: none !important; text-align:center; }

  @media (max-width: 767px) {
    .hide-Desktop{ display: block !important; }
    .hide-Mobile{ display: none !important; }
  } 
`;

const HeaderOuter = styled.div`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1010; padding:15px 0; transition: all 500ms; 
  &.fly {
    background: url(${GrunjPatt.src}) 50% 50% repeat ;
   padding:8px 0;
  }
  ${Media.sm} {  &.fly { padding:10px 0; }

`;

const HeadMBX = styled(FlexDiv)`
  width:100%; max-width:1400px;


  .MMenu { 
    display:none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: absolute; border:none; background: transparent;
    right: 15px;
    top: 28px;
    width: 44px;
    height: 42px;
    padding: 6px 2px;
    span {
      width: 100%;
      height: 2px;
      background:#fff;
      display: block;
      margin: 4px;
      transition: all 100ms;
    }
    &.active {
      span:nth-child(01) {
        transform: rotate(-45deg) translate(-4px, 3px);
      }
      span:nth-child(02) {
        display: none;
      }
      span:nth-child(03) {
        transform: rotate(45deg) translate(-7px, -6px);
      }
    }
  }
  ${Media.sm} {
  .MMenu{display:flex}
  }

`
const LogoBX = styled(FlexDiv)`
    width:100%; max-width:185px; transition: all ease-in-out 600ms !important; 
    img{ max-width:100%; height:auto; }  
    .fly & {max-width:160px; } 
    ${Media.sm} { 

     max-width:120px; margin-right:auto;
     .fly & {max-width:120px; } 

    }

`
 
const NavigationBX = styled(FlexDiv)`
  margin:0 0 0 auto; 
  a{ font-size:17px; padding:4px 10px; margin:0 11px; color:#fff; display:inline-block;  :hover{ text-decoration:underline;}  
  &.icoLink{ padding:4px 0; margin:0 4px; :hover{ filter:brightness(1.2);} } }
  
  ${Media.sm} { visibility:hidden; opacity:0;   background: url(${GrunjPatt.src}) 50% 50% repeat ;   width:100%; padding:5px 0 0 0; align-items:flex-start; margin-top:15px; height:0px; transition:all 600ms;
    &.active{visibility:visible; opacity:1; height:auto; } 

    a{ font-size:17px; padding:12px 10px; width:calc(100% - 15px); border-bottom:1px solid #5379b2; margin:0 11px; 
      &.icoLink{ padding:4px 10px; margin:10px 0 0 0; border-bottom:none; display:inline-block; width:auto; }
    }
  }


`




export default Header;
