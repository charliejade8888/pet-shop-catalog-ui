import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { logout, isUserLoggedIn } from "./AuthenticationService"

function HeaderComponent() {
    // function isUserLoggedIn() {
    //     return isUserLoggedIn()
    // }
    // console.log(isUserLoggedIn)
    // function logMeout() {
    //     return logout()
    // }

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
                    {<li><Link className='nav-link' to='/logout' onClick={logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )
}



export default HeaderComponent