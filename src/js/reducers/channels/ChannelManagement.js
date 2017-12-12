import {combineReducers} from 'redux'

import {channels} from "./Channels"
import {channelEditedId} from "./ChannelEdited"
import {isSaving} from "./IsSaving";
import {channelSelectedId} from './ChannelSelected'

export const channelManagement = combineReducers({
    channels: channels,
    editedItemId: channelEditedId,
    isSaving: isSaving,
    selectedItemId: channelSelectedId,
})