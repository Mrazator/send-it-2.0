import { combineReducers } from 'redux'

import { channels } from './channels'
import { editingChannelId } from './editingChannelId'
import { isSavingChannels } from './isSavingChannels'
import { selectedChannel } from './messages/selectedChannel'
import { isAddingUser } from './IsAddingUser'
import { users } from './users'
import { isSavingChannelsUsers } from './isSavingChannelsUsers'

export const channelManagement = combineReducers({
  channels,
  users,
  isSavingChannels,
  isSavingChannelsUsers,
  isAddingUser,
  editingChannelId,
  selectedChannel
})
