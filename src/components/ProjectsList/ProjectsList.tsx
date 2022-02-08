import React, { useEffect, useRef, useState } from 'react';
import ProyectCard from '../ProyectCard/Proyect.Card';
import axios from '../../http-common'
import useMaxPages from '../../hooks/useMaxPages'

// import Rows  from './styles.js';
export default function Proyects() {

    const [projects, setProjects] = useState([])
    const [page, setPage] = useState(1)
    const maxPages = useMaxPages()
    const http = axios()
   
    useEffect(() => {
        const fetchData = async () =>{
            const { data } = await http.get('/projects',{params:{page}});
            if(!data.length){
                return setPage(1)
            }
            setProjects(data);
        }
        fetchData()
    },[page])

    function handleClick (direct:string) {
        
        if(direct == "right"){
            return setPage( page + 1 )
        }
        if(direct == "left"){
            page -1 == 0 ? setPage(maxPages) : setPage( page - 1 )
        }
    }
// if the key is superior to the number of projects you should get, 
  return (
    <div className="container">
        <div className="row gy-5 row-cols-1 row-cols-md-2 ">
          {
            projects.map((item,key) => <ProyectCard key={key} data={item} isOdd={(key%2 == 0)} />)
          }
          <button onClick={()=>handleClick('left')}>{'<'}</button>
          <button onClick={()=>handleClick('right')}>{'>'}</button>

        </div>
    </div>
  );
}
