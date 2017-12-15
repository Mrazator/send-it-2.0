import * as actions from "../../constants/actionTypes"

export const loadingStarted = () => ({
    type: actions.MESSAGES_LOADING_STARTED
})


export const loadingEnded = () => ({
    type: actions.MESSAGES_LOADING_ENDED
})

export const loadMessages = (messages) => ({
    type: actions.MESSAGES_LOAD,
    payload: {
        messages
    }
})