import {combineReducers} from 'redux'
import {channels} from "./Channels"
import {channelEditedId} from "./ChannelEdited"
import {isSaving} from "./IsSaving";


export const channelManagement = combineReducers({
    channelList: channels,
    editedItemId: channelEditedId,
    isSaving: isSaving
})