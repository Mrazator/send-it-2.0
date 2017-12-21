import React from 'react'

import { ROOT } from '../../constants/routes'
import { LoginForm } from '../../containers-redux/login/LoginForm'
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelmet'
import { Loader } from '../../containers-redux/shared/Loader.jsx'


const Login = ({ from = { pathname: ROOT } }) => (
  <div className="Login">
    <HeadInHelmet />
    <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
      <div className="left-col">
        <h1>Login page</h1>
      </div>
      <div className="right-col">
        <LoginForm from={from} />
      </div>
    </Loader>
  </div>
)

export default Login
