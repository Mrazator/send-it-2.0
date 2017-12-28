import { API_CHANNEL_URI } from '../../constants/api'

import {
  channelsAddingUserAdded,
  channelsFailUploadChannelUsers,
  channelsSavingStarted,
  channelsUpdateChannel
} from './actionCreators'
import { convertToServerEditChannel } from '../../utils/api/conversions/channel'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchRequest } from '../shared'

export const actionUploadChannelUsers = (values, channel) => (dispatch, getState) => {
  dispatch(channelsSavingStarted())
  const { users } = values

  const newChannel = channel
  newChannel.customData.users = users.map(x => x.value)

  const authToken = getState().shared.token
  const requestUri = API_CHANNEL_URI

  const bodyJson = convertToServerEditChannel(newChannel)

  return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
    .then(() => dispatch(channelsUpdateChannel(channel)))
    .then(() => dispatch(channelsAddingUserAdded()))
    .catch((error) => {
      const action = dispatch(channelsFailUploadChannelUsers(uuid())('channelsFailUploadChannelUsers', error))
      setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
    })
}
