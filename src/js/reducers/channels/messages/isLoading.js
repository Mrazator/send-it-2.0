import {MESSAGES_LOADING_ENDED, MESSAGES_LOADING_STARTED} from "../../../constants/actionTypes";

export const isLoading = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGES_LOADING_STARTED:
            return true;

        case MESSAGES_LOADING_ENDED:
            return false

        default:
            return prevState
    }
}