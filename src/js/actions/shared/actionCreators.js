import * as actions from '../../constants/actionTypes'
import {errorActionFactory} from "../../utils/errorActionFactory";
import {SHARED_RECEIVE_EMAIL} from "../../constants/actionTypes";

export const receiveValidToken = (token) => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token
    }
})

export const receiveValidEmail = (email) => ({
    type: SHARED_RECEIVE_EMAIL,
    payload: {
        email
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})

export const startAuthentication = () => ({
  type: actions.SHARED_AUTHENTICATION_STARTED
})

export const dismissError = (errorId) => ({
    type: actions.SHARED_DISMISS_ERROR,
    payload: {
        errorId
    }
})

export const failAuthentication = errorActionFactory(actions.SHARED_AUTHENTICATION_FAILED);
