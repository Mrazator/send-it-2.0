import * as actions from '../../constants/actionTypes'
import { errorActionFactory } from '../../utils/errorActionFactory'

export const channelsUpdate = channels => ({
  type: actions.CHANNELS_UPDATE,
  payload: {
    channels
  }
})

export const channelsSelectChannel = channelId => ({
  type: actions.CHANNELS_ITEM_SELECT,
  payload: {
    id: channelId
  }
})

export const channelsAddChannel = channel => ({
  type: actions.CHANNELS_ITEM_CREATE,
  payload: {
    channel: {
      ...channel
    }
  }
})

export const channelsRemoveChannel = id => ({
  type: actions.CHANNELS_ITEM_DELETE,
  payload: {
    id
  }
})

export const channelsUpdateChannel = channel => ({
  type: actions.CHANNELS_ITEM_UPDATE,
  payload: {
    channel
  }
})

export const channelsAddingUser = () => ({
  type: actions.CHANNELS_ADDING_USER_STARTED
})

export const channelsLoadRegisteredUsers = users => ({
  type: actions.CHANNELS_LOAD_USERS,
  payload: {
    users
  }
})

export const channelsAddingUserCancel = () => ({
  type: actions.CHANNELS_ADDING_USERS_CANCELED
})

export const channelsAddingUserAdded = () => ({
  type: actions.CHANNELS_ADDING_USERS_ADDED
})

export const channelsStartEditingChannel = channelId => ({
  type: actions.CHANNELS_ITEM_START_EDITING,
  payload: {
    id: channelId
  }
})

export const channelsCancelEditingChannel = () => ({
  type: actions.CHANNELS_ITEM_CANCEL_EDITING
})

export const channelsSavingStarted = () => ({
  type: actions.CHANNELS_SAVING_STARTED
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

export const channelsFailCreateChannel = id => errorActionFactory(id, actions.CHANNELS_FAIL_CREATE_CHANNEL)

export const channelsFailDeleteChannel = id => errorActionFactory(id, actions.CHANNELS_FAIL_DELETE_CHANNEL)

export const channelsFailEditChannel = id => errorActionFactory(id, actions.CHANNELS_FAIL_EDIT_CHANNEL)

export const channelsFailLoadChannels = id => errorActionFactory(id, actions.CHANNELS_FAIL_LOAD_CHANNELS)

export const channelsFailLoadUsers = id => errorActionFactory(id, actions.CHANNELS_FAIL_LOAD_USERS)

export const channelsFailSaveChannels = id => errorActionFactory(id, actions.CHANNELS_FAIL_SAVE_CHANNELS)

export const channelsFailUploadChannelUsers = id => errorActionFactory(id, actions.CHANNELS_FAIL_FAIL_UPLOAD_CHANNEL_USERS)

