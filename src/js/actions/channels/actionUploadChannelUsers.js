import { API_CHANNEL_URI } from '../../constants/api'

import {
  channelsAddingUserAdded,
  channelsSavingStarted,
  channelsUpdateChannel
} from './actionCreators'
import { convertToServerEditChannel } from '../../utils/api/conversions/channel'
import { fetchRequest } from '../../utils/api/fetchRequest'

export const actionUploadChannelUsers = (values, channel) => (dispatch, getState) => {
  dispatch(channelsSavingStarted())
  const { users } = values

  const newChannel = channel
  newChannel.customData.users = users.map(x => x.value)

  const authToken = getState().shared.token
  const requestUri = API_CHANNEL_URI

  const bodyJson = convertToServerEditChannel(newChannel)

  return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
    .then(dispatch(channelsUpdateChannel(channel)))
    .then(dispatch(channelsAddingUserAdded()))
    .catch(error => console.log('actionUploadChannelUsers - Failed', error))
}
