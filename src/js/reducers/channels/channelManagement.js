import {combineReducers} from 'redux'

import {channels} from "./channels"
import {editingChannelId} from "./editingChannelId"
import {isSaving} from "./IsSaving";
import {selectedChannel} from "./messages/selectedChannel";
import {isAddingUser} from "./IsAddingUser";
import {users} from "./users";

export const channelManagement = combineReducers({
    channels,
    users,
    isSaving,
    isAddingUser,
    editingChannelId,
    selectedChannel
})