import Immutable from 'immutable'
import { createMessagesQueryUri } from '../../constants/api'
import { convertFromServerMessages } from '../../utils/api/conversions/messages'
import { messagesLoadingStarted, messagesSave } from './actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { channelsFailCreateChannel } from '../channels/actionCreators'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'

export const actionLoadMessagesFactory = ({ fetchReceive }) => (channelId, lastN) =>
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
      .catch((error) => {
        const action = dispatch(channelsFailCreateChannel(uuid())('actionLoadMessagesFactory', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
