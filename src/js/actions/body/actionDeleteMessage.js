import { createMessageUri } from '../../constants/api'
import { fetchDelete } from '../../utils/api/fetchDelete'
import { messagesRemoveMessage } from './actionCreators'

export const actionDeleteMessage = (channelId, messageId) =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = createMessageUri(channelId, messageId)

    return fetchDelete(requestUri, authToken)
      .then(() => dispatch(messagesRemoveMessage(messageId)))
      .catch(error => console.log(error, 'actionDeleteMessage - Failed'))
  }
