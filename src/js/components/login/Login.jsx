import React from 'react'

import {ROOT} from '../../constants/routes'

import {LoginForm} from "../../containers-redux/login/LoginForm"

const Login = ({from = { pathname: ROOT }}) => {

    return (
        <div className="Login">
            <h2>Login page</h2>
            <LoginForm from={from}/>
        </div>
    )
}

export default Login
