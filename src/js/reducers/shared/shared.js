import { combineReducers } from 'redux'
import { isAuthenticating } from './isAuthenticating'
import { errors } from './errors'
import { token } from './token'
import { email } from './email'

export const shared = combineReducers({
  isAuthenticating,
  token,
  email,
  errors
})
