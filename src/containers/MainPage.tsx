import * as React from 'react'
import PageTitle from '../components/PageTitle/Page.Title'
import Projects from '../components/ProjectsList/Projects.List'
import Form from './Contact'
import About from './About'

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
            <About />
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
