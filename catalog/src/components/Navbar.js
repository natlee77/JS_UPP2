import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={logo}  width="30" height="30" className="d-inline-block align-top" alt=""/> 
               
                <span className="ms-2" > Activity Catalog </span>
            </a>
        </div>
    </nav>       
    )
}

export default Navbar
