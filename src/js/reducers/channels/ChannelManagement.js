import {combineReducers} from 'redux'

import {channels} from "./Channels"
import {channelEditedId} from "./ChannelEdited"
import {isSaving} from "./IsSaving";
import {channelSelectedId} from './ChannelSelected'
import {selectedChannel} from "./messages/selectedChannel";

export const channelManagement = combineReducers({
    channels: channels,
    selectedChannel: selectedChannel,
    editedItemId: channelEditedId,
    isSaving: isSaving,
    selectedItemId: channelSelectedId,
})