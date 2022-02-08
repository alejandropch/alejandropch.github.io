import React from 'react';
import useMaxPages from '../../hooks/useMaxPages'
import {Button} from './styles'
interface Params{
    readonly page:number,
         setPage(x:number):void
}
export default function SlideButton({page, setPage}:Params) {
    const maxPages = useMaxPages()
  
    function handleClick (direct:string) {
        
        if(direct == "right"){
            return setPage( page + 1 )
        }
        if(direct == "left"){
            page -1 == 0 ? setPage(maxPages) : setPage( page - 1 )
        }
    }

  return (
    <>
        <div className="carousel-indicators">
        {
            // creating an array with the n° of maxPages as slots 
            [...Array(maxPages)].map((e,key)=> {
                const pageNumber = key + 1
                const isActive = (pageNumber==page) && true

                return <button key= {key} type="button" data-bs-target="#Target" data-bs-slide-to={pageNumber} className={isActive?"active":""} aria-label={`Slide ${pageNumber}`}></button>
            })
        }
        </div>

        <Button className="carousel-control-prev" onClick={()=>handleClick('left')} type="button" data-bs-target="#Target" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </Button>
        <Button className="carousel-control-next" onClick={()=>handleClick('right')} type="button" data-bs-target="#Target" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </Button>  
    </>
    )
}
