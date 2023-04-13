import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Media from "./media-breackpoint";

import GrunjPatt from '../public/images/texture.png';
  
var Gs = {};

Gs.GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;  
    /* font-family: 'Mulish', sans-serif; */
    font-family: var(--mulish-font), sans-serif;
    background: url(${GrunjPatt.src}) 50% 50% repeat; font-weight:400;
    color:#fff; 
  }  

  img{  max-width:100%; height:auto;}

  h1,h2,h3,h4,h5{font-size:inherit; font-weight:inherit; margin:0; padding:0;}
 
  
  html {
  --scroll-behavior: smooth;
  scroll-behavior: smooth;
}
  
.PatterBX {width:100%; position:absolute; left:0px; top:0; right:0; bottom:0 ;
   z-index:1;  background: url(${GrunjPatt.src}) 50% 50% repeat; }



.youtube-embed {
  position: relative;
  padding-bottom: 56%;
  width: 100%;
  text-align: left;
}

.youtube-embed iframe {
  width: 100%;
  position: absolute;
  height: 100%;
  overflow: hidden;
} 

.CanvasGraph{ min-height:520px; width:100%; display:block;}

${Media.sm} { 
.CanvasGraph{ display:none;}
}
`;

Gs.MainBox = styled.div`

position:relative ;

`;

Gs.Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0px 15px;
  &.hmFix01 {
    position: relative;
    z-index: 3;
  } 
`;
 


export default Gs;
