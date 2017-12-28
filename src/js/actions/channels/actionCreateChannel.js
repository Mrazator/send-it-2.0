import Immutable from 'immutable'

import { API_CHANNEL_URI } from '../../constants/api'
import { fetchRequest } from '../../utils/api/fetchRequest'
import { channelsAddChannel, channelsSavingStarted } from './actionCreators'
import {
  convertFromServerChannel,
  getFromServerLastChannel,
  convertToServerCreateChannelFactory
} from '../../utils/api/conversions/channel'
import { uuid } from '../../utils/uuid'

export const actionCreateChannel = () =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())

    const authToken = getState().shared.token
    const requestUri = API_CHANNEL_URI
    const id = uuid()
    const bodyJson = convertToServerCreateChannelFactory(id)(getState().shared.email, Immutable.List())

    return fetchRequest(requestUri, authToken, 'PATCH', bodyJson)
      .then(server => dispatch(channelsAddChannel(convertFromServerChannel(getFromServerLastChannel(server)))))
      .catch(error => console.log(error, 'actionCreateChannel - Failed'))
  }
