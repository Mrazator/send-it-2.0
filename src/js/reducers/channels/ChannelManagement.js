import {combineReducers} from 'redux'

import {channels} from "./Channels"
import {channelEditedId} from "./ChannelEdited"
import {isSaving} from "./IsSaving";
import {channelSelectedId} from './ChannelSelected'
import {selectedChannel} from "./messages/selectedChannel";
import {isAddingUser} from "./IsAddingUser";
import {users} from "./Users";

export const channelManagement = combineReducers({
    channels,
    users,
    isSaving,
    isAddingUser,
    editedItemId: channelEditedId,
    selectedItemId: channelSelectedId,
    selectedChannel
})