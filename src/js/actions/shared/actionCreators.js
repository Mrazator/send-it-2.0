import * as actions from '../../constants/actionTypes'
import {appiId} from '../../constants/api'

export const receiveValidToken = () => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token: appiId
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})
