import {getInitialItems} from "./getInitialItems";

export const getInitialState = () => ({
    channelManagement: {
        channels: getInitialItems()
    }
})