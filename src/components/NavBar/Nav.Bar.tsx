import React,{ useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import {Nav} from './styles'
export default function NavBar() {
    const [fixed, setFixed]=useState(false)

    function onScroll():void {
        const showFixed = window.scrollY > 100
        fixed != showFixed && setFixed(showFixed)
        console.log(fixed);
    }

    useEffect(()=>{
        document.addEventListener('scroll',onScroll)
        return ()=> document.removeEventListener('scroll',onScroll)
    },[fixed])


    return (
        <Nav className="navbar navbar-expand" fixed={fixed}>
        {/* <div className="container-fluid nav nav-tabs justify-content-end flex-nowrap"> */}
            <ul className="container-fluid nav justify-content-evenly flex-nowrap">
                <li className="nav-item">
                    <Link to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </Nav>

    )
}
