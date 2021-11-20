
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import { Route, Redirect } from 'react-router'

export default class AuthenticatedRoute extends Component {
    render() {
       if(AuthenticationService.isUserLoggedIn()){
         return  <Route {...this.props}/>;
       }else{
        return  <Redirect to="login"/>;
       }
    }
}

