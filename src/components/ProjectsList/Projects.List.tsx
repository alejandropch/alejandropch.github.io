import React, { useEffect, useRef, useState } from 'react';
import ProyectCard from '../ProyectCard/Proyect.Card';
import axios from '../../http-common'
import SlideButton from '../SlideButton/Slide.Button'
// import Rows  from './styles.js';
export default function Proyects() {

    const [projects, setProjects] = useState([])
    const [page, setPage] = useState(1)
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

// if the key is superior to the number of projects you should get, 
  return (
    <div className="container position-relative">
    <SlideButton page={page} setPage={setPage}/>
        <div className="row gy-5 row-cols-1 row-cols-md-2 ">
          {
            projects.map((item,key) => <ProyectCard key={key} data={item} isOdd={(key%2 == 0)} />)
          }
     
        </div>
    </div>
  );
}
