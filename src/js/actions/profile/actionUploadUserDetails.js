import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import {
    profileUpdateProfileDetails,
    profileFailUploadingProfileDetails,
} from './actionCreators';
import {
    createApiUser
} from '../../constants/api';
import {
    sharedDismissError
} from '../shared/actionCreators';
import {fetchRequest} from '../../utils/api/fetchRequest';
import {
    convertFromServerDetails,
} from '../../utils/api/conversions/profileDetails';
import {DETAILS_FORM_NAME} from '../../constants/formNames';

import {
    FAILED_UPDATE_DETAILS_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR,

} from '../../constants/uiConstants';
import {performAuthorizedRequest} from "./performAuthorizedRequest";

export const actionUploadUserDetails = (details) =>
    async (dispatch, getState) => {
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const authToken = getState().shared.token;
        const requestUri = createApiUser(details.email);
        const serverDetails = details.customData;

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchRequest(requestUri, authToken, "PUT", JSON.stringify(serverDetails));
                const updatedDetails = convertFromServerDetails(receivedServerDetails);
                return dispatch(profileUpdateProfileDetails(updatedDetails.email, updatedDetails.customData));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(profileFailUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE, error));
            setTimeout(() => dispatch(sharedDismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }

        return dispatch(stopSubmit(DETAILS_FORM_NAME));
    };
