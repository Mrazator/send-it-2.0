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
      .then((server) => {
        if (server.channels.length === 0) {
          dispatch(channelsSavingFinished())
          return Immutable.List()
        }

        const owner = getState().shared.email
        return dispatch(channelsUpdate(convertFromServerChannels(server, owner)))
      })
      .catch(error => console.log(error, 'actionLoadChannels - Failed'))
  }
