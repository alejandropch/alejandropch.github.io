import styled,{css} from "styled-components";

interface Custom {
    readonly fixed:boolean
}

const Nav= styled.nav<Custom>`
    position: absolute;
    flex-wrap: nowrap;
    display: flex;
    left: 0;
    right: 0;
    top: 0;

    ${ props => props.fixed && css`
        position: fixed;
        animation fade-in 1s;
        z-index:1;
    `}


@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
    
`
export {Nav}