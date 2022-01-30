import React from 'react';
import ProyectCard from './Proyect.Card';

export default function Proyects() {
    const array = [1,2,3,4,5]
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 ">
          {
            array.map((i,key)=><ProyectCard key={key} />)
          }

        </div>
    </div>
  );
}
