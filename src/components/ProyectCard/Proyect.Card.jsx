import React, { useEffect, useRef, useState } from 'react';
import {Card, Img} from './styles'
import { useNearScreen } from '../../hooks/useNearScreen';

export default function ProyectCard({data, isOdd}) {
    const {title,desc:text} = data
     const [status, setStatus] =useState("image")
     const [show, element] = useNearScreen()
     console.log(title,show);
     const handleMouseLeave = () => {
        //  setTimeout(()=>{setStatus("image")
        // console.log("aaa");},1000)
     }
  return (
    
    <Card className="col flex-column p-0 border" ref={element} show={show} theme={status} isOdd={isOdd}>
        <div className="container" onMouseEnter={()=>setStatus("text")} onMouseLeave={handleMouseLeave}>
            {status=="image"?
                <div>
                    <h3>{title}</h3>
                    <Img src="https://i.imgur.com/xx8nWal.jpeg" className="img-fluid" alt="" />
                </div>
                :
                <div>
                    <h3>{title}</h3>
                    <p className="text-start">{text}</p>
                </div>
            }
        </div>

    </Card>  
    )
}
