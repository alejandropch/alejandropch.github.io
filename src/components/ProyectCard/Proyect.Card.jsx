import React, { useEffect, useState } from 'react';
import {Card} from './styles'
export default function ProyectCard({data:{title,desc:text}}) {


     const [status, setStatus] =useState("image")

 
  return (
    
    <Card className="col flex-column p-0 border" theme={status} onMouseEnter={()=>setStatus("text")}>
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
