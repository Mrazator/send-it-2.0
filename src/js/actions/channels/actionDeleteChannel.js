import { channelsRemoveChannel, channelsSavingStarted } from './actionCreators'
import { API_CHANNEL_URI } from '../../constants/api'
import { convertToServerDeleteChannel } from '../../utils/api/conversions/channel'
import { fetchRequest } from '../../utils/api/fetchRequest'

export const actionDeleteChannel = channelId =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const bodyJson = convertToServerDeleteChannel(channelId)

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(dispatch(channelsRemoveChannel(channelId)))
      .catch(error => console.log(error, 'actionDeleteChannel - Failed'))
  }
