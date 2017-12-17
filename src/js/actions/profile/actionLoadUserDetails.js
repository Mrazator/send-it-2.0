import {
  profileUpdateProfileDetails,
  profileFailFetchingProfileDetails,
  profileStartFetchingProfileDetails
} from './actionCreators'
import {
  createApiUser
} from '../../constants/api'
import { sharedInvalidateToken, failAuthentication } from '../shared/actionCreators'
import { fetchReceive } from '../../utils/api/fetchReceive'

import {
  EXPIRED_AUTHENTICATION_MESSAGE,
  FAILED_FETCH_DETAILS_MESSAGE
} from '../../constants/uiConstants'
import { actionLoadUserAvatar } from './actionLoadUserAvatar'

export const actionLoadUserDetails = () =>
  (dispatch, getState) => {
    dispatch(profileStartFetchingProfileDetails())

    const authToken = getState().shared.token
    const requestUri = createApiUser(getState().shared.email)

    return fetchReceive(requestUri, authToken)
      .then(serverDetails => dispatch(profileUpdateProfileDetails(serverDetails.email, JSON.parse(serverDetails.customData))))
      .then(({ payload: { customData: { avatarId } = {} } = {} }) => avatarId && dispatch(actionLoadUserAvatar(avatarId)))
      .catch((error) => {
        if (error.statusCode === 401) {
          dispatch(sharedInvalidateToken())
          return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE))
        }
        throw error
      })
      .catch(error => dispatch(profileFailFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
  }
