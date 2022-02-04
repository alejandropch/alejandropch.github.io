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
    top: 1rem;
    font-size:1.3rem;
    font-weight:450;

    a{

    color:#01dfd6;
    text-decoration: none ;
    }
    a:hover{
        color :#009b94;
    }


    }
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