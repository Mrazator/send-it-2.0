import { API_USER_URI } from '../../constants/api'
import {
  channelsLoadRegisteredUsers,
  channelsUsersSavingStarted
} from './actionCreators'
import { fetchReceive } from '../../utils/api/fetchReceive'
import { convertFromServerUsers } from '../../utils/api/conversions/users'

export const actionLoadUsers = () =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = API_USER_URI

    dispatch(channelsUsersSavingStarted())

    return fetchReceive(requestUri, authToken)
      .then((server) => {
        dispatch(channelsLoadRegisteredUsers(convertFromServerUsers(server)))
      })
      .catch(error => console.log(error, 'actionLoadUsers - Failed'))
  }
