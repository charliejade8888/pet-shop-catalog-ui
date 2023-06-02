import React, { Component } from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

function ErrorComponent() {
    return <div>An Error Occured, I don't know what to do! Contact Support</div>
}

export default ErrorComponent