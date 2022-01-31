import React, { useEffect, useRef, useState } from 'react';
import {Card} from './styles'
import { useNearScreen } from '../../hooks/useNearScreen';

export default function ProyectCard({data, isOdd}) {
    const {title,desc:text} = data
     const [status, setStatus] =useState("image")
     const [show, element] = useNearScreen()
  return (
    
    <Card className="col flex-column p-0 border" ref={element} show={show} theme={status} isOdd={isOdd}onMouseEnter={()=>setStatus("text")}>
        <div className="container">

            {status=="image"?
            <div>
                <h3>{title}</h3>
                <img src="https://i.imgur.com/xx8nWal.jpeg" className="img-fluid" alt="" />
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
