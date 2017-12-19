import Immutable from 'immutable'
import { MESSAGES_CREATE, MESSAGES_DELETE_MESSAGE, MESSAGES_LOAD } from '../../../constants/actionTypes'

export const messages = (prevState = Immutable.List(), action) => {
  switch (action.type) {
    case MESSAGES_LOAD:
      return Immutable.List(action.payload.messages)

    case MESSAGES_CREATE:
      return prevState.push({ ...action.payload.message })

    case MESSAGES_DELETE_MESSAGE:
      return prevState.filterNot(x => x.id === action.payload.messageId)

    default: return prevState
  }
}
