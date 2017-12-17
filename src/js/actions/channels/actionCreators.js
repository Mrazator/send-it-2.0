import * as actions from "../../constants/actionTypes";

export const channelsUpdate = (channels) => {
    return {
        type: actions.CHANNELS_UPDATE,
        payload: {
            channels
        }
    }
}

export const channelsSelectChannel = (channelId) => ({
    type: actions.CHANNELS_ITEM_SELECT,
    payload: {
        id: channelId
    }
})

export const channelsAddChannel = (channel) => ({
    type: actions.CHANNELS_ITEM_CREATE,
    payload: {
        channel: {
            ...channel
        }
    }
})

export const channelsRemoveChannel = (id) => ({
    type: actions.CHANNELS_ITEM_DELETE,
    payload: {
        id
    }
})

export const channelsUpdateChannel = (channel) => ({
    type: actions.CHANNELS_ITEM_UPDATE,
    payload: {
        channel
    }
})

export const channelsAddingUser = () => ({
    type: actions.CHANNELS_ADDING_USER
})

export const channelsLoadRegisteredUsers = (users) => ({
    type: actions.CHANNELS_LOAD_USERS,
    payload: {
         users
    }
})

export const channelsAddingUserCancel = () => ({
    type: actions.CHANNELS_USER_ADDED_OR_CANCELED
})

export const channelsStartEditingChannel = (channeldId) => ({
    type: actions.CHANNELS_ITEM_START_EDITING,
    payload: {
        id: channeldId
    }
})

export const channelsCancelEditingChannel = () => ({
    type: actions.CHANNELS_ITEM_CANCEL_EDITING
})

export const channelsSavingStarted = () => ({
    type: actions.CHANNELS_SAVING_STARTED,
})
export const channelsSavingFinished = () => ({
    type: actions.CHANNELS_SAVING_FINISHED
})
export const channelsUsersSavingStarted = () => ({
    type: actions.CHANNELS_USERS_SAVING_STARTED
})
export const channelsUsersSavingFinished = () => ({
    type: actions.CHANNELS_USERS_SAVING_FINISHED
})

