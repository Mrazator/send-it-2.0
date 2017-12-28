import Immutable from 'immutable'

import { API_CHANNEL_URI } from '../../constants/api'
import {
  channelsFailLoadChannels, channelsSavingFinished, channelsSavingStarted,
  channelsUpdate
} from './actionCreators'
import { convertFromServerChannels } from '../../utils/api/conversions/channel'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchReceive } from '../shared'

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
      .catch((error) => {
        const action = dispatch(channelsFailLoadChannels(uuid())('channelsFailLoadChannels', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
