import Immutable from 'immutable'
import { fetchReceive } from '../../utils/api/fetchReceive'
import { createMessagesQueryUri } from '../../constants/api'
import { convertFromServerMessages } from '../../utils/api/conversions/messages'
import { messagesLoadingStarted, messagesSave } from './actionCreators'

export const actionLoadMessages = (channelId, lastN) =>
  (dispatch, getState) => {
    dispatch(messagesLoadingStarted())
    const authToken = getState().shared.token
    const requestUri = createMessagesQueryUri(channelId, lastN)

    return fetchReceive(requestUri, authToken)
      .then((server) => {
        const messages = server.length !== 0
          ? convertFromServerMessages(server).reverse()
          : Immutable.List()

        dispatch(messagesSave(messages))
      })
      .catch(error => console.log(error, 'actionLoadMessages - Failed'))
  }
