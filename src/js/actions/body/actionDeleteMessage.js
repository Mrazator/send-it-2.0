import { createMessageUri } from '../../constants/api'
import { messagesRemoveMessage } from './actionCreators'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { channelsFailCreateChannel } from '../channels/actionCreators'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'

export const actionDeleteMessageFactory = fetchDelete => (channelId, messageId) =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = createMessageUri(channelId, messageId)

    return fetchDelete(requestUri, authToken)
      .then(() => dispatch(messagesRemoveMessage(messageId)))
      .catch((error) => {
        const action = dispatch(channelsFailCreateChannel(uuid())('actionDeleteMessageFactory', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
