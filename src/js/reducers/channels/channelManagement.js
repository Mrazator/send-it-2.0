import {channelList} from "./channelList"

export const channelManagement  = (previousState, action) => ({
    channelList: channelList(previousState.channelList, action)
})