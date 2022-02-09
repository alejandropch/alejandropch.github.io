import React, { useState } from 'react';
import {Card, Img, CategoryImage} from './styles'
import  useNearScreen from '../../hooks/useNearScreen';


interface Parameters {
   readonly data: {
        title: string,
        desc: string
    }, 
    readonly isOdd: boolean
}

export function SkeletonCard(props: any){
   return(
        <>
       {
            [1, 2, 3, 4].map(key => (
                <div key={key} className="col">
                    <CategoryImage className="container" light={props.light} />
                </div>
            ))
        }
        </>
    )
}
export function ProyectCard({data, isOdd} : Parameters) {
    const {title,desc:text} = data
     const [status, setStatus] =useState("image")
     const [show, element] = useNearScreen() as any
    
     const handleMouseLeave = () => {
        //  setTimeout(()=>{setStatus("image")
        // console.log("aaa");},1000)
     }
  return (
    
    <div className="col flex-column">
        <Card className="container" ref={element} show={show as boolean} theme={status as "image"|"text"} isOdd={isOdd}onMouseEnter={()=>{
            setStatus("text")
            }}>
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
        </Card>

    </div>  
    )
}
