import { API_CHANNEL_URI } from '../../constants/api'
import { convertToServerEditChannel } from '../../utils/api/conversions/channel'
import {
  channelsFailEditChannel, channelsSavingStarted,
  channelsUpdateChannel
} from './actionCreators'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchRequest } from '../shared'

export const actionEditChannel = channel =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const bodyJson = convertToServerEditChannel(channel)

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(dispatch(channelsUpdateChannel(channel)))
      .catch((error) => {
        const action = dispatch(channelsFailEditChannel(uuid())('channelsFailEditChannel', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
