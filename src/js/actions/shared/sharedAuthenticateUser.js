import { push } from 'connected-react-router'
import * as keys from '../../constants/localStorageKeys'
import {
  sharedDismissError,
  sharedReceiveValidEmail,
  sharedReceiveValidToken,
  failAuthentication,
  sharedStartAuthentication
} from './actionCreators'

import { fetchAuthToken } from '../../utils/api/fetchAuthToken'
import {
  MILISECONDS_TO_AUTO_DISMISS_ERROR,
  FAILED_AUTHENTICATION_MESSAGE
} from '../../constants/uiConstants'
import { API_USER_URI } from '../../constants/api'
import { profileUpdateProfileDetails } from '../profile/actionCreators'
import { fetchPostUser } from '../../utils/api/fetchPostUser'

export const sharedAuthenticateUser = (destinationLocation, userEmail) =>
  (dispatch) => {
    dispatch(sharedStartAuthentication())

    return fetchPostUser(API_USER_URI, userEmail)
      .then((response) => {
        if (response) {
          fetchAuthToken(userEmail)
            .then((token) => {
              dispatch(sharedReceiveValidEmail(userEmail))
              dispatch(sharedReceiveValidToken(token))
              dispatch(push(destinationLocation))
              dispatch(profileUpdateProfileDetails(userEmail, {
                nickName: userEmail.slice(0, userEmail.indexOf('@')),
                avatarId: ''
              }))

              localStorage.setItem(keys.SHARED_EMAIL, userEmail)
              localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token))
              localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()))
            })
        }
      })
      .catch((error) => {
        const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error))
        setTimeout(() => dispatch(sharedDismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }

