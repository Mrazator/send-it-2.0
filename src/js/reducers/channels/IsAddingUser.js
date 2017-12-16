import * as actions from '../../constants/actionTypes'

export const isAddingUser = (previousState = false, action) => {
    switch (action.type) {
        case actions.CHANNELS_ADDING_USER:
            return true

        case actions.CHANNELS_USER_ADDED_OR_STOPPED:
            return false

        default:
            return previousState
    }
}