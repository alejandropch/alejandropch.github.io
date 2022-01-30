import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from '../pages/MainPage.jsx'
import Layout from './Layout.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

    return (

    
     <BrowserRouter>
     <Layout>
            <Routes>
               <Route path="/" element={<MainPage />}/> 
            </Routes>
            </Layout>
    </BrowserRouter>
    )
}
