import {MESSAGES_LOADING_FINISHED, MESSAGES_LOADING_STARTED} from "../../../constants/actionTypes";

export const isLoading = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGES_LOADING_STARTED:
            return true;

        case MESSAGES_LOADING_FINISHED:
            return false

        default:
            return prevState
    }
}