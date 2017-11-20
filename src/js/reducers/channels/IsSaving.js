import * as actions from '../../constants/actionTypes'

export const isSaving = (prevState = false, action) => {
    switch (action.type) {
        case actions.TODO_LIST_SAVING_STARTED:
            return true

        case actions.TODO_LIST_SAVING_FINISHED:
            return false;

        default:
            return prevState
    }
}