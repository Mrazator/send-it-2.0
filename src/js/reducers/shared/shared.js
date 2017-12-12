import {combineReducers} from 'redux'
import {isAuthenticating} from './isAuthenticating'
import { errors } from './errors'
import {token} from './token'

export const shared = combineReducers({
    isAuthenticating,
    token,
    errors
})