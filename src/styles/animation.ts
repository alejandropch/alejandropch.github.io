import { keyframes, css } from 'styled-components'
    
const skeletonBackground = (light:any) => {
    console.log("holaaA???",light);
    
    return(
  css`
  background: linear-gradient(to right, #000 8%, #454646 18% ,#000 33%);
  opacity:0.3;
	animation: ${gradient} 3s linear infinite forwards;
     -webkit-backface-visibility: hidden;
    `
)}

const gradient = keyframes`
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 80em 0;
  }
`

export const skeletonStyle = (light = true) => skeletonBackground(light)