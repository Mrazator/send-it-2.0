import {channelManagement} from "./channels/channelManagement"

export const app = (previousState, action) => ({
    channelManagement: channelManagement(previousState.channelManagement, action)
})