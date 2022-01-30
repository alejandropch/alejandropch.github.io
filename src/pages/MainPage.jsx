import React from 'react'
import Proyects from '../components/Proyects'

export default function MainPage() {
    return (
        <div className="container">
            <section className="d-flex justify-content-start my-5">
            <div>

              <h1 className="hi__container--text">Alejandro Pachas</h1>
              <h2 href="#" className="hi__container--arrow-down">Fullstack Engineer</h2>
            </div>

            </section>
        <Proyects />
            <section className="profile gradient">
                <div className="profile__container">
                </div>
            </section>
     

        </div>

    )
}
