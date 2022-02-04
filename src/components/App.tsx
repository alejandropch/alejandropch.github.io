import * as React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from '../containers/MainPage'
import Layout from './Layout'
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
