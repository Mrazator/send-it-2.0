import {
  channelsFailDeleteChannel, channelsRemoveChannel,
  channelsSavingStarted
} from './actionCreators'
import { API_CHANNEL_URI } from '../../constants/api'
import { convertToServerDeleteChannel } from '../../utils/api/conversions/channel'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchRequest } from '../shared'

export const actionDeleteChannel = channelId =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const bodyJson = convertToServerDeleteChannel(channelId)

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(() => dispatch(channelsRemoveChannel(channelId)))
      .catch((error) => {
        const action = dispatch(channelsFailDeleteChannel(uuid())('channelsFailDeleteChannel', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
