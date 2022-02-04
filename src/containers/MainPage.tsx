import * as React from 'react'
import PageTitle from '../components/PageTitle/Page.Title'
import Projects from '../components/ProjectsList/ProjectsList'
import Form from './Form'
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
            <PageTitle />



            <section>

        <p className="fs-4">Fullstack Engineer - Capable of crafting web applications, Single Page Apps, Web Components, and Serverside Rendering using the MERN stack. I really love having projects that have great functionality but also look nice for the end user. I’m constantly learning new ways of developing outstanding products. So, if you want to say hi or talk about something. Feel free to contact me.</p>
        <button>Contact me</button>
            </section>
            <Projects />
            <section>
                <Form />

            </section>
            <section className="profile gradient">
                <div className="profile__container">

                </div>
            </section>
     

        </div>
        </>

    )
}
