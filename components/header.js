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

  const { setDarkTheme, setIsDarkThemeDisabled } = props;
  const [ isSMenuDisabled, setIsSMenuDisabled ] = useState(true);
  const router = useRouter(); 
 

  const onInit = ({ state, style, node }) => {
    setIsOpen(false); 
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) setHeaderClass(true);
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
              <img  src={LogoIMG02.src} alt='Fetch Oracle' />
 
                </LogoBX>
              <NavigationBX> 
                <Link href="#">Knowledge</Link>         
                <Link href="#">Whitepaper</Link>   
                  <Link href="#" className='icoLink'><img src={Twit_ICO.src} alt='twitter' /> </Link>  
                  <Link href="#" className='icoLink'><img src={Tele_ICO.src} alt='telegram' /> </Link>   
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
`;

const HeadMBX = styled(FlexDiv)`
  width:100%; max-width:1400px;
`
const LogoBX = styled(FlexDiv)`
    width:100%; max-width:185px; transition: all ease-in-out 600ms !important; 
    img{ max-width:100%; height:auto; }  
    .fly & {width:100%;  
    }


`
 
const NavigationBX = styled(FlexDiv)`
  margin:0 0 0 auto; 
  a{ font-size:17px; padding:4px 10px; margin:0 11px; color:#fff; display:inline-block;  :hover{ text-decoration:underline;} 

  &.icoLink{ padding:4px 0; margin:0 4px; :hover{ filter:brightness(1.2);} }

}

`




export default Header;
