import React, { useEffect, useRef, useState } from 'react';
import ProyectCard from './ProyectCard/Proyect.Card';
import axios from '../http-common'
export default function Proyects() {

    const [projects, setProjects] = useState([])
    const http = axios()
    useEffect(async()=>{
        const {data} = await http.get('/projects')
        setProjects(data)     
    
    },[])
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 ">
          {
            projects.map((item,key)=><ProyectCard key={key} data={item} isOdd={key%2}/>)
          }

        </div>
    </div>
  );
}
