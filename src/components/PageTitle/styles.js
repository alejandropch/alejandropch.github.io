import React from 'react';
import styled,{css} from 'styled-components'

const TitleContent = styled.div`
    display: flex;
    min-height: 85vh;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    flex-direction: column;
`

const Name = styled.h1`
    font-family:monospace;
    white-space:nowrap;
    display:block;
    width:17ch;
    border-right:3px solid;

    animation:typing 10s steps(17), blink .5s infinite step-end alternate;

    overflow: hidden;
    @keyframes typing {
        from { width:0}
        to{width:101%}
    }
    
    @keyframes blink {
        50% {border-color:transparent}
    }


`
export {Name, TitleContent}