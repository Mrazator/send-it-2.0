import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import {
    updateProfileDetails,
    failUploadingProfileDetails,
} from './actionCreators';
import {
    apiUserEmail
} from '../../constants/api';
import {
    dismissError
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

export const uploadUserDetails = (details) =>
    async (dispatch, getState) => {
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const authToken = getState().shared.token;
        const requestUri = apiUserEmail(details.email);
        const serverDetails = details.customData;

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchRequest(requestUri, authToken, "PUT", serverDetails);
                const updatedDetails = convertFromServerDetails(receivedServerDetails);
                return dispatch(updateProfileDetails(updatedDetails.email, updatedDetails.customData));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }

        return dispatch(stopSubmit(DETAILS_FORM_NAME));
    };
