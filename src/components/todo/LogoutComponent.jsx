import React, { Component } from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

function LogoutComponent() {
    return (
        <>
            <h1>You are logged out</h1>
            <div className='container'>
                Thankyou for Using Our Application
            </div>
        </>
    )
}

export default LogoutComponent