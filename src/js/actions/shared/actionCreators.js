import * as actions from '../../constants/actionTypes'
import {APPI_ID} from '../../constants/api'

export const receiveValidToken = () => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token: APPI_ID
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})
