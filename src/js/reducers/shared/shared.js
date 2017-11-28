import {combineReducers} from 'redux'
import {isAuthenticating} from './isAuthenticating'

import {token} from './token'

export const shared = combineReducers({
    isAuthenticating,
    token
})