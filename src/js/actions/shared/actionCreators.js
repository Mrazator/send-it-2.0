import * as actions from '../../constants/actionTypes'

export const receiveValidToken = () => ({
    type: actions.SHARED_RECEIVE_TOKEN,
    payload: {
        token: 'guid-token'
    }
})

export const invalidateToken = () => ({
    type: actions.SHARED_INVALIDATE_TOKEN
})
