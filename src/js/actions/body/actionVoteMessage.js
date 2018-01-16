import { createMessageUri } from '../../constants/api'
import { messageVote } from './actionCreators'
import { convertFromServerMessage } from '../../utils/api/conversions/messages'
import { MILISECONDS_TO_AUTO_DISMISS_ERROR } from '../../constants/uiConstants'
import { channelsFailCreateChannel } from '../channels/actionCreators'
import { uuid } from '../../utils/uuid'
import { sharedDismissError } from '../shared/actionCreators'

export const actionVoteMessageFactory = ({ fetchRequest }) => (channelId, message) =>
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
      .catch((error) => {
        const action = dispatch(channelsFailCreateChannel(uuid())('actionVoteMessageFactory', error))
        setTimeout(() => dispatch(sharedDismissError(action.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      })
  }
