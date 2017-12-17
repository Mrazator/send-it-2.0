import * as actions from '../../constants/actionTypes'

export const isSavingChannelsUsers = (prevState = false, action) => {
    switch (action.type) {
        case actions.CHANNELS_USERS_SAVING_STARTED:
            return true

        case actions.CHANNELS_USERS_SAVING_FINISHED:
            return false;

        default:
            return prevState
    }
}