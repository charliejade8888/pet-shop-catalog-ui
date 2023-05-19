import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
//import { Route, Redirect } from 'react-router-dom' //REACT-5
import { logout, isUserLoggedIn } from "./AuthenticationService"
 
export default function AuthenticatedRoute({ children }) {
        if (isUserLoggedIn()) {
            return children
        } else {
            console.log(`DOWEGETHERE:: ${isUserLoggedIn()}`)
            return window.location.href = 'http://localhost:8180/realms/petshoprealm/protocol/openid-connect/logout';
            // return <Navigate to="http://localhost:8180/realms/petshoprealm/protocol/openid-connect/logout" /> 
        }
}
