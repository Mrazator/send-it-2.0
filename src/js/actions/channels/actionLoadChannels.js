import Immutable from 'immutable'

import { API_CHANNEL_URI } from '../../constants/api'
import { channelsSavingFinished, channelsSavingStarted, channelsUpdate } from './actionCreators'
import { fetchReceive } from '../../utils/api/fetchReceive'
import { convertFromServerChannels } from '../../utils/api/conversions/channel'

export const actionLoadChannels = () =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI

    dispatch(channelsSavingStarted())
    return fetchReceive(requestUri, authToken)
      .then(async (server) => {
        const owner = getState().shared.email
        const converted = convertFromServerChannels(server, owner)

        if (converted.length === 0) {
          dispatch(channelsSavingFinished())
          return Immutable.List()
        }

        return dispatch(channelsUpdate(converted))
      })
      .catch(error => console.log(error, 'actionLoadChannels - Failed'))
  }
