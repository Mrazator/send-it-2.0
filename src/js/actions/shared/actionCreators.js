import * as actions from '../../constants/actionTypes'
import {appId} from '../../constants/api'

export const receiveValidToken = () => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token: appId
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})
