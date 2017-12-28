import Immutable from 'immutable'

import { API_CHANNEL_URI } from '../../constants/api'
import { channelsAddChannel, channelsFailCreateChannel, channelsSavingStarted } from './actionCreators'
import {
  convertFromServerChannel,
  getFromServerLastChannel,
  convertToServerCreateChannelFactory
} from '../../utils/api/conversions/channel'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { fetchRequest } from '../shared'

export const actionCreateChannelFactory = () =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const channelId = uuid()
    const bodyJson = convertToServerCreateChannelFactory(channelId)(getState().shared.email, Immutable.List())

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(server => dispatch(channelsAddChannel(convertFromServerChannel(getFromServerLastChannel(server)))))
      .catch((error) => {
        const action = dispatch(channelsFailCreateChannel(uuid())('channelsFailCreateChannel', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
