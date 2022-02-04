import * as React from 'react'
import NavBar from './NavBar/Nav.Bar'
export default function Layout(props: {children: any} ) {
    return (
    <React.Fragment>
        <NavBar/>
        {props.children}
    </React.Fragment>
    )
}
