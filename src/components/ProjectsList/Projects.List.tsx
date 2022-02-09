import React, { useEffect, useRef, useState } from 'react';
import {ProyectCard, SkeletonCard} from '../ProjectCard/Project.Card';
import {List} from './styles'
interface ItemData {
         title: string,
         desc: string
 }
export default function ProjectsList({projects}:any) {
    
  return (
    <List className="container position-relative">
            <div className="row gy-5 row-cols-1 row-cols-lg-2 ">
            {
                (!projects.length)? <SkeletonCard/>: projects.map((item:ItemData, key:number) => <ProyectCard key={key} data={item} isOdd={(key%2 == 0)} />)
            }
        
            </div>
    </List>
  );
}
