import React, { useEffect, useRef, useState } from 'react';
import ProyectCard from '../ProyectCard/Proyect.Card';
import axios from '../../http-common'
// import Rows  from './styles.js';
export default function Proyects() {

    const [projects, setProjects] = useState([])
    const http = axios()
    useEffect(() => {
        const fetchData = async () =>{
            const { data } = await http.get('/projects');
            setProjects(data);
        }
        fetchData()
    },[])
  return (
    <div className="container">
        <div className="row gy-5 row-cols-1 row-cols-md-2 ">
          {
            projects.map((item,key)=><ProyectCard key={key} data={item} isOdd={(key%2 == 0)}/>)
          }

        </div>
    </div>
  );
}
