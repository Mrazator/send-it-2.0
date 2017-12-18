import { API_CHANNEL_URI } from '../../constants/api'
import { convertToServerEditChannel } from '../../utils/api/conversions/channel'
import { fetchRequest } from '../../utils/api/fetchRequest'
import { channelsSavingStarted, channelsUpdateChannel } from './actionCreators'

export const actionEditChannel = channel =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const bodyJson = convertToServerEditChannel(channel)

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(dispatch(channelsUpdateChannel(channel)))
      .catch(error => console.log(error, 'actionEditChannel - Failed'))
  }
