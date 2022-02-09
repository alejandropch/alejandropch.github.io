import React, { useEffect, useRef, useState } from 'react';
import {ProyectCard, SkeletonCard} from '../ProjectCard/Project.Card';
import {List} from './styles'
interface ItemData {
         title: string,
         desc: string
 }
export default function ProjectsList({projects}:any) {
    

// if the key is superior to the number of projects you should get, 
  return (
    <ProjectsList className="container position-relative">
    {  (!projects.length)?<h2>Loading</h2>:<>
            <SlideButton page={page} setPage={setPage}/>
                <div className="row gy-5 row-cols-1 row-cols-lg-2 ">
                {
                    projects.map((item,key) => <ProyectCard key={key} data={item} isOdd={(key%2 == 0)} />)
                }
            
                </div>
        </>
    }
    
    </ProjectsList>
  );
}
