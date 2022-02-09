
import {} from 'styled-components/cssprop'
/* this will only be imported once */
import styled,{css} from 'styled-components'
import {skeletonStyle} from '../../styles/animation'

interface SkeletonCustom {
    light: any,
}

interface Custom {
    show: boolean,
    isOdd: boolean
}
const Card = styled.div<Custom>`

    height: 370px;
    overflow: hidden;
    white-space: break-spaces;
    visibility: hidden;
    min-width:270px;
    max-width:400px;

    position:relative;
    ${props => props.show && props.isOdd && css`
        animation-name: rotateInDownLeft;
        visibility: visible;
        animation-duration: 1s;
        animation-fill-mode: both;
    `}
    ${props => props.show && !props.isOdd && css`

        animation-name: rotateInDownRight;
        visibility: visible;
        animation-duration: 1s;
        animation-fill-mode: both;
    `}
     ${props => props.theme == "text" && css`
        backface-visibility: visible !important;
        animation-name: flipInX;
        animation-duration: 1s;
        animation-fill-mode: both;

        color:#fff;
        background:#000;
      `}
    
    ${props => props.theme == "image" && css`

        //https://imgur.com/xx8nWal
        color:#fff;
        //background:#000;
      `}
   
    @media screen and (max-width: 400px) {
        height: fit-content;
        animation:none !important;
        
    } 
    @keyframes flipInX {
        0% {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        transition-timing-function: ease-in;
        opacity: 0;
        }
        40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        transition-timing-function: ease-in;
        }
        60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
        }
        80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
        }
        100% {
        transform: perspective(400px);
        }
    }
    @keyframes rotateInDownLeft {
        0% {
        transform-origin: left bottom;
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
        }
        100% {
        transform-origin: left bottom;
        transform: none;
        opacity: 1;
        }
    } 
    @keyframes rotateInDownRight {
        0% {
        transform-origin: right bottom;
        transform: rotate3d(0, 0, 1, 45deg);
        opacity: 0;
        }
        100% {
        transform-origin: right bottom;
        transform: none;
        opacity: 1;
        }
    } 

`
const CategoryImage = styled.div<SkeletonCustom>`
      position:relative;
    height: 370px;
    overflow: hidden;
    white-space: break-spaces;
    min-width:270px;
    max-width:400px;
    background-color: rgba(155, 115, 200);
    border-radius: 5%;
    ${ props => css`
            ${skeletonStyle(props.light)}
        `
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

export {Card, Img,CategoryImage}