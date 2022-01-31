import React from 'react'
import Proyects from '../components/Proyects'

export default function MainPage() {
    return (
        <>
        <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   </div>

        <div className="container text-white">
            <section className="d-flex justify-content-start my-5">
            <div>
              <h1 className="hi__container--text">Alejandro Pachas</h1>
              <h2 href="#" className="hi__container--arrow-down">Fullstack Engineer</h2>
            </div>

            </section>
            <section>

        <p className="fs-4">Fullstack Engineer - Capable of crafting web applications, Single Page Apps, Web Components, and Serverside Rendering using the MERN stack. I really love having projects that have great functionality but also look nice for the end user. I’m constantly learning new ways of developing outstanding products. So, if you want to say hi or talk about something. Feel free to contact me.</p>

            </section>
            <Proyects />
            <section className="profile gradient">
                <div className="profile__container">
                </div>
            </section>
     

        </div>
        </>

    )
}
