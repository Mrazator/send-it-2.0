import Immutable from 'immutable'
import { fetchReceive } from '../../utils/api/fetchReceive'
import { createMessageUri } from '../../constants/api'
import { convertFromServerMessages } from '../../utils/api/conversions/messages'
import { messagesLoadingStarted, messagesSave } from './actionCreators'
import { channelsSelectChannel } from '../channels/actionCreators'

export const actionLoadMessages = channelId =>
  (dispatch, getState) => {
    dispatch(messagesLoadingStarted())

    const authToken = getState().shared.token
    const requestUri = createMessageUri(channelId)

    return fetchReceive(requestUri, authToken)
      .then((server) => {
        const messages = server.length !== 0
          ? convertFromServerMessages(server).sort((x, y) => x.createdAt > y.createdAt)
          : Immutable.List()

        dispatch(channelsSelectChannel(channelId))
        dispatch(messagesSave(messages))
      })
      .catch(error => console.log(error, 'actionLoadMessages - Failed'))
  }
