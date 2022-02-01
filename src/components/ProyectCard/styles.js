import React from 'react';
import styled,{css} from 'styled-components'

const Card = styled.div`

    height: 270px;
    overflow: hidden;
    white-space: break-spaces;
    visibility: hidden;
    min-width:270px;
    position:relative;
    ${props=> props.show && props.isOdd && css`
            
            -webkit-animation-name: rotateInDownRight;
            animation-name: rotateInDownRight;
            visibility: visible;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            `
    }
    ${props=> props.show && !props.isOdd && css`
            -webkit-animation-name: rotateInDownLeft;
            animation-name: rotateInDownLeft;
            visibility: visible;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            `
    }
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

        //https://imgur.com/xx8nWal
        color:#fff;
        //background:#000;
      `
    }
   
    @media screen and (max-width: 400px) {
        height: fit-content;
        animation:none !important;
        
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
    @keyframes rotateInDownLeft {
        0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
        }
        100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1;
        }
    } 
    @keyframes rotateInDownRight {
        0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate3d(0, 0, 1, 45deg);
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
        }
        100% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1;
        }
    } 

`

const Img = styled.img`
position: absolute;
top:0;
left:0;
height:100%;
width:100%;
object-fit:cover;
box-shadow:0 10px 14px rgba(0,0,0,.2);

`

export {Card, Img}