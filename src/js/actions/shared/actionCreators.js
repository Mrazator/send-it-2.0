import * as actions from '../../constants/actionTypes'
import { errorActionFactory } from '../../utils/errorActionFactory'

export const sharedReceiveValidToken = token => ({
  type: actions.SHARED_RECEIVE_TOKEN,
  payload: {
    token
  }
})

export const sharedReceiveValidEmail = email => ({
  type: actions.SHARED_RECEIVE_EMAIL,
  payload: {
    email
  }
})

export const sharedInvalidateToken = () => ({
  type: actions.SHARED_INVALIDATE_TOKEN
})

export const resetState = () => ({
  type: actions.SHARED_USER_LOGOUT
})

export const sharedStartAuthentication = () => ({
  type: actions.SHARED_AUTHENTICATION_STARTED
})

export const sharedDismissError = errorId => ({
  type: actions.SHARED_DISMISS_ERROR,
  payload: {
    errorId
  }
})

export const failAuthentication = errorActionFactory(actions.SHARED_AUTHENTICATION_FAILED)
