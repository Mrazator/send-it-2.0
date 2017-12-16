import * as actions from "../../constants/actionTypes";

export const updateChannels = (channels) => {
    return {
        type: actions.CHANNELS_UPDATE,
        payload: {
            channels
        }

    }
}

export const selectChannel = (id) => ({
    type: actions.CHANNELS_ITEM_SELECT,
    payload: {
        id
    }
})

export const addChannel = (channel) => ({
    type: actions.CHANNELS_ITEM_CREATE,
    payload: {
        channel: {
            ...channel
        }
    }
})

export const removeChannel = (id) => ({
    type: actions.CHANNELS_ITEM_DELETE,
    payload: {
        id
    }
})

export const updateChannel = (channel) => ({
    type: actions.CHANNELS_ITEM_UPDATE,
    payload: {
        channel
    }
})


export const addingUser = () => ({
    type: actions.CHANNELS_ADDING_USER
})

export const cancelAddingUser = () => ({
    type: actions.CHANNELS_USER_ADDED_OR_STOPPED
})

export const startEditingItem = (id) => ({
    type: actions.CHANNELS_ITEM_START_EDITING,
    payload: {
        id
    }
})

export const cancelEditingItem = () => ({
    type: actions.CHANNELS_ITEM_CANCEL_EDITING
})

export const savingStarted = () => ({
    type: actions.CHANNELS_SAVING_STARTED,
})

export const savingFinished = () => ({
    type: actions.CHANNELS_SAVING_FINISHED,
})

