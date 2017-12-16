import * as actions from "../../constants/actionTypes"

export const loadingStarted = () => ({
    type: actions.MESSAGES_LOADING_STARTED
})


export const loadingEnded = () => ({
    type: actions.MESSAGES_LOADING_ENDED
})

export const saveMessages = (messages) => ({
    type: actions.MESSAGES_LOAD,
    payload: {
        messages
    }
})

export const saveMessage = (mess) => ({
    type: actions.MESSAGES_CREATE,
    payload: {
        message: {
            ...mess
        }
    }
})