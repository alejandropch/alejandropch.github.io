import React, { useEffect, useRef, useState } from 'react';
import SlideButton from '../components/SlideButton/Slide.Button'
import axios from '../http-common'
import ProjectsList from '../components/ProjectsList/Projects.List'
export default function Projects() {
    const [page, setPage] = useState(1)
    const [projects, setProjects] = useState([])
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
        return()=>setProjects([]);
    },[page])
    
  return (
    <div className="container position-relative">
        <SlideButton page={page} setPage={setPage}/>
        <ProjectsList projects={projects} />
    </div>

  )
}
