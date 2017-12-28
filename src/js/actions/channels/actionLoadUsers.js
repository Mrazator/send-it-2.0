import { API_USER_URI } from '../../constants/api'
import {
  channelsFailLoadUsers,
  channelsLoadRegisteredUsers,
  channelsUsersSavingStarted
} from './actionCreators'
import { convertFromServerUsers } from '../../utils/api/conversions/users'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchReceive } from '../shared'

export const actionLoadUsers = () =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = API_USER_URI

    dispatch(channelsUsersSavingStarted())

    return fetchReceive(requestUri, authToken)
      .then((server) => {
        dispatch(channelsLoadRegisteredUsers(convertFromServerUsers(server)))
      })
      .catch((error) => {
        const action = dispatch(channelsFailLoadUsers(uuid())('channelsFailLoadUsers', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
