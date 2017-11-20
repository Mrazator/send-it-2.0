import { Route } from 'react-router-dom'
import { ROOT, PROFILE, LOGIN } from '../constants/routes'
import React from 'react'
import App from "./app/App"
import Profile from "./profile/Profile"
import Login from "./login/Login"



const Layout = () => {
    return (
        <div id="Layout">
            <Route exact path={ROOT} component={App}/>
            <Route exact path={PROFILE} component={Profile}/>
            <Route exact path={LOGIN} component={Login}/>
        </div>
    )
}

export default Layout
