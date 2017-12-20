import * as actions from '../../constants/actionTypes'

export const messagesLoadingStarted = () => ({
  type: actions.MESSAGES_LOADING_STARTED
})


export const messagesLoadingFinished = () => ({
  type: actions.MESSAGES_LOADING_FINISHED
})

export const messagesRemoveMessage = messageId => ({
  type: actions.MESSAGES_DELETE_MESSAGE,
  payload: {
    messageId
  }
})

export const messagesSave = messages => ({
  type: actions.MESSAGES_LOAD,
  payload: {
    messages
  }
})

export const messageSave = message => ({
  type: actions.MESSAGES_CREATE,
  payload: {
    message: {
      ...message
    }
  }
})

export const messageVote = message => ({
  type: actions.MESSAGES_VOTE,
  payload: {
    message: {
      ...message
    }
  }
})

