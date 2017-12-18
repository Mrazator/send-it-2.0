import React from 'react'

import { ROOT } from '../../constants/routes'
import { LoginForm } from '../../containers-redux/login/LoginForm'
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelmet'
import { Loader } from '../../containers-redux/shared/Loader.jsx'


const Login = ({ from = { pathname: ROOT } }) => (
  <div className="Login">
    <HeadInHelmet />
    <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
      <h1>Login page</h1>
      <LoginForm from={from} />
    </Loader>
  </div>
)

export default Login
