import React, { useEffect, useState } from 'react';
import { Name, TitleContent } from './styles';

export default function PageTitle() {

  return (
  
    <section className="d-flex justify-content-start">
        <TitleContent className="justify-content-center">
            <Name className="hi__container--text" >Alejandro Pachas.</Name>
            <h2 className="hi__container--arrow-down">Fullstack Engineer</h2>
        </TitleContent>
    </section>
    )
}
