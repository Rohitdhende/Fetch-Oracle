//import npm packages 
import { useRef } from 'react';  

//import next js packages
import Image from 'next/image';
import Link from 'next/link';

//import styles
import styled from 'styled-components';
import Media from '../styles/media-breackpoint';
import Gs from '../styles/theme.config';

import LogoIMG from '../public/images/logo.svg';
 
//import img
import FooterBG from '../public/images/footer-Curve.png';
import TeleICO from '../public/images/telegram-ico-02.png';
import TwitICO from '../public/images/twitter-ico-02.png';

const Footer = () => { 

  return (
    <FooterSection> 

          <FooterMBX>
            <FooterSBX>
              <Image className="FooterLOGO"  src={LogoIMG} alt='Fetch Oracle' />
            </FooterSBX>
            <FooterSBX className='v1'><Link href="#">Knowledge</Link>        <span>|</span>       <Link href="#">Whitepaper</Link></FooterSBX>
            <FooterSBX  className='v2'>
              <Link href="#"><Image src={TwitICO} alt='Fetch Oracle' /></Link>
              <Link href="#"><Image src={TeleICO} alt='Fetch Oracle' /></Link>
            </FooterSBX> 
          </FooterMBX>
          <FooterMBX02>
          <p>Copyright 2023 Fetch Oracle, All Rights Reserved.</p>
          </FooterMBX02>





 
    </FooterSection>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`; 
const FooterSection = styled.div`
   background:url(${FooterBG.src}) center top no-repeat ; min-height:430px; padding-top:290px; position:relative; z-index:5 ;
  
`;
const FooterMBX = styled(FlexDiv)`
  width:100%; max-width:1400px; margin:0 auto 20px auto; padding:0 22px; 
`
const FooterSBX = styled(FlexDiv)`
    width:33.33%; justify-content:flex-start;

    .FooterLOGO{ max-width:175px; height:auto;}
    a{ font-size:16px; color:#180928; font-weight:300; :hover{ text-decoration:underline;}}
    span{ color:#180928; font-size:20px; opacity:0.5; padding:0 22px;}

    &.v1{ justify-content: center; padding-top:15px;}
    &.v2{ justify-content: flex-end;  padding-top:15px; a{ padding:0 10px; :hover{  filter:brightness(1.2);}}}  

    ${Media.sm}{ width:100%; 
      &.v1{ width:70%; justify-content:flex-start; }
      &.v2{ width:30%; }
    }
    ${Media.xs}{  justify-content:center; 
      &.v1{ width:100%; justify-content:center; }
      &.v2{ width:100%;  justify-content:center;}

     }



`
const FooterMBX02 = styled(FlexDiv)`
  width:100%;  margin:0 auto; padding:0 22px; background-color:#fafafa;

  p{ max-width:100%; font-size:16px; color:#180928; font-weight:300;  text-align:center;}

`
export default Footer;
