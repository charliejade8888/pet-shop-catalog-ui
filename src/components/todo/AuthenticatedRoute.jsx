import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
//import { Route, Redirect } from 'react-router-dom' //REACT-5
import AuthenticationService from './AuthenticationService.js'
 
export default function AuthenticatedRoute(props) {
        if (AuthenticationService.isUserLoggedIn()) {
            return {...props.children}
        } else {
            return window.location.href = 'http://localhost:8180/realms/petshoprealm/protocol/openid-connect/logout';
            // return <Navigate to="http://localhost:8180/realms/petshoprealm/protocol/openid-connect/logout" /> 
        }
}
