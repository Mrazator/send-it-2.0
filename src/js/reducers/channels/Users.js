import * as actions from '../../constants/actionTypes'
import Immutable from 'immutable'

export const users = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case actions.CHANNELS_LOAD_USERS:
            return Immutable.List(action.payload.users)

        default:
            return prevState
    }
}