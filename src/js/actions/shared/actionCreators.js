import { uuid } from '../../utils/uuid'
import * as actions from '../../constants/actionTypes'

export const receiveValidToken = (token) => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})

export const startAuthentication = () => ({
  type: actions.SHARED_AUTHENTICATION_STARTED
})

export const failAuthentication = (errorMessage, error) => ({
  type: actions.SHARED_AUTHENTICATION_FAILED,
  payload: {
    error: {
      id: uuid(),
      message: errorMessage,
      statusText: error.message,
      statusCode: error.statusCode
    }
  }
})
