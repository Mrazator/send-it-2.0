import {messagesLoadingStarted, messageSave, messagesLoadingFinished} from './actionCreators'
import { createMessageUri } from '../../constants/api'
import { fetchRequest } from '../../utils/api/fetchRequest'
import { convertFromServerMessage } from '../../utils/api/conversions/messages'

export const actionPostMessage = (channelId, messageText) =>
  (dispatch, getState) => {
    dispatch(messagesLoadingStarted())

    const authToken = getState().shared.token
    const requestUri = createMessageUri(channelId)
    const bodyJson = {
      value: messageText,
      customData: JSON.stringify([
        'somedata',
        'willbehere',
        'inthefuture'
      ])
    }

    return fetchRequest(requestUri, authToken, 'POST', bodyJson)
      .then((server) => { dispatch(messageSave(convertFromServerMessage(server))) })
      .then(() => dispatch(messagesLoadingFinished()))
      .catch(error => console.log(error, 'actionPostMessage - Failed'))
  }
