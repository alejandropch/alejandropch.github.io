import React from 'react';
import styled,{css} from 'styled-components'

const Card = styled.div`

    height: 250px;
    overflow: hidden;
    white-space: break-spaces;
  
    
     ${props=>props.theme=="text" && css`
        -webkit-backface-visibility: visible !important;
        backface-visibility: visible !important;
        -webkit-animation-name: flipInX;
        animation-name: flipInX;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      
        color:#fff;
        background:#000;
      `
    }
    
    ${props=>props.theme=="image" && css`


        https://imgur.com/xx8nWal
        color:#fff;
        //background:#000;
      `
    }
   
    @media screen and (max-width: 400px) {
        height: fit-content;
  } 


        @keyframes flipInX {
        0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        opacity: 0;
        }
        40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
        }
        60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
        }
        80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }
        100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
        }
        }

`

export {Card}