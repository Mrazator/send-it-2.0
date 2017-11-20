import React from 'react'

import {ROOT} from '../../constants/routes'
import {LoginForm} from "../../containers-redux/login/LoginForm"
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'


const Login = ({from = { pathname: ROOT }}) => {

    return (
        <div className="Login">
            <HeadInHelmet/>
            <h2>Login page</h2>
            <LoginForm from={from}/>
        </div>
    )
}

export default Login
