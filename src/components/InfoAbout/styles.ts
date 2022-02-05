import styled from 'styled-components'

const Text = styled.p`

    overflow: hidden;
    white-space: break-spaces;
`
const Img = styled.img`

    overflow: hidden;
     max-width:480px;
     width:100%;
     animation fade-in 1s;

    /*max-height:200px; */

    @keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
    

export {Text, Img}