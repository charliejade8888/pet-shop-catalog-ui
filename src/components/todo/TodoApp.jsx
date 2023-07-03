import React, { Component } from 'react'

import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import PetComponent from './PetComponent.jsx'

function TodoApp() {
    
        // const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = WelcomeComponent; // TODO remove redundants
        const HeaderComponentWithNavigation = HeaderComponent; //withNavigation(HeaderComponent);

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<WelcomeComponentWithParams />} />
                        {/* <Route path="/login" element={<LoginComponentWithNavigation />} /> */}
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} /> 
                        <Route path="/pet/:name" element={<AuthenticatedRoute><PetComponent /></AuthenticatedRoute>} /> 
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent /></AuthenticatedRoute>} /> 
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} /> 
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }


export default TodoApp