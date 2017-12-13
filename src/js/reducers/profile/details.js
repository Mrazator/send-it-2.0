import {PROFILE_UPDATE_DETAILS} from '../../constants/actionTypes'

const defaultDetails = {
    "email": "",
    "customData": ""
}

export const details = (prevState = defaultDetails, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_DETAILS:
            return {...action.payload}

        default:
            return prevState
    }
}