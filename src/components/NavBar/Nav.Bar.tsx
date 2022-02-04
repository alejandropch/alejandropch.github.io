import * as React from 'react'
import { Link } from 'react-router-dom'
import {Nav} from './styles'
export default function NavBar() {
    return (
            <Nav className="navbar navbar-expand">
{/*                 
                <div className="container-fluid nav nav-tabs justify-content-end flex-nowrap"> */}

                 <ul className="container-fluid nav justify-content-center flex-nowrap">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                        </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Projects
                        </Link>
                        </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Contact
                        </Link></li>

                 </ul>


            {/* </div> */}
        </Nav>

    )
}
