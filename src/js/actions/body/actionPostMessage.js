import { messagesLoadingStarted, messageSave, messagesLoadingFinished } from './actionCreators'
import { createUserUri, createMessagesUri, createFileUri } from '../../constants/api'
import { fetchRequest } from '../../utils/api/fetchRequest'
import { convertFromServerMessage } from '../../utils/api/conversions/messages'
import { fetchReceive } from '../../utils/api/fetchReceive'

export const actionPostMessage = (channelId, messageText) =>
  async (dispatch, getState) => {
    dispatch(messagesLoadingStarted())

    const authToken = getState().shared.token
    const requestUri = createMessagesUri(channelId)

    const userUri = createUserUri(getState().shared.email)
    const response = await fetchReceive(userUri, authToken)
    const avatarId = response &&
      JSON.parse(response.customData).avatarId

    const avatarUri = avatarId &&
      await fetchReceive(createFileUri(avatarId), authToken)

    const bodyJson = {
      value: messageText,
      customData: JSON.stringify({
        avatarUri: avatarUri || '',
        vote: 0
      })
    }

    return fetchRequest(requestUri, authToken, 'POST', bodyJson)
      .then((server) => { dispatch(messageSave(convertFromServerMessage(server))) })
      .then(() => dispatch(messagesLoadingFinished()))
      .catch(error => console.log(error, 'actionPostMessage - Failed'))
  }
