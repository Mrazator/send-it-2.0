import {getInitialItems} from "./getInitialItems"
import {getPersistedToken} from "./getPersistedToken"

export const getInitialState = () => ({
    channelManagement: {
        channels: getInitialItems()
    },
    shared: {
        token: getPersistedToken()
    }
})