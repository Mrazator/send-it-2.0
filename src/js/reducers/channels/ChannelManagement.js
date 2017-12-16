import {combineReducers} from 'redux'

import {channels} from "./Channels"
import {channelEditedId} from "./ChannelEdited"
import {isSaving} from "./IsSaving";
import {channelSelectedId} from './ChannelSelected'
import {selectedChannel} from "./messages/selectedChannel";
import {isAddingUser} from "./IsAddingUser";

export const channelManagement = combineReducers({
    channels,
    selectedChannel,
    isSaving,
    editedItemId: channelEditedId,
    selectedItemId: channelSelectedId,
    isAddingUser: isAddingUser || false
})