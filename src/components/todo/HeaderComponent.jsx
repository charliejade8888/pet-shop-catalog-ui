import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'

function HeaderComponent() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    console.log(isUserLoggedIn)
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://www.in28minutes.com/" className='navbar-brand'>in28minutes</a></div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className='nav-link' to='/welcome/in28minutes'>Home</Link></li>}
                    {isUserLoggedIn && <li><Link className='nav-link' to='/todos'>Pets</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {/* { !isUserLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>} */}
                    {<li><Link className='nav-link' to='/logout' onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )
}



export default HeaderComponent