import React, { Component } from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    // execute following to make node backwards compatible
    // export NODE_OPTIONS=--openssl-legacy-provider
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }
    render() {
        console.log("hello")
        console.log(sessionStorage.getItem("bearer-token"))
        return (
            <>
                <h1>Welcome</h1>
                <div className='container'>Welcome {this.props.params.name}. You can manage your Todos <Link to='/todos'>here</Link></div>
                <div className='container'>
                    Click here to get a customised welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className='btn btn-success'>Get Welcome Message</button>
                </div>
            </>
        )
    }
    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then( response => console.log(response))
        // .catch()
        // console.log('retrieve clicked')
    }
}

export default WelcomeComponent