import { createMessageUri } from '../../constants/api'
import {messageVote} from './actionCreators'
import { convertFromServerMessage } from '../../utils/api/conversions/messages'
import { fetchRequest } from '../../utils/api/fetchRequest'

export const actionVoteMessage = (channelId, message) =>
  (dispatch, getState) => {
    const authToken = getState().shared.token
    const requestUri = createMessageUri(channelId, message.id)

    const bodyJson = {
      value: message.value,
      customData: JSON.stringify({
        avatarUri: message.customData.avatarUri,
        vote: message.customData.vote + 1
      })
    }

    return fetchRequest(requestUri, authToken, 'PUT', bodyJson)
      .then((server) => { dispatch(messageVote(convertFromServerMessage(server))) })
      .catch(error => console.log(error, 'actionVoteMessage - Failed'))
  }
