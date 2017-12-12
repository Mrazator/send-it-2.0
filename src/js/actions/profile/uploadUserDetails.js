import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import {
    updateProfileDetails,
    failUploadingProfileDetails,
} from './actionCreators';
import {
    USER_EMAIL,
    createApiUserUri
} from '../../constants/api';
import {
    dismissError,
    invalidateToken,
    failAuthentication,
} from '../shared/actionCreators';
import { fetchRequest } from '../../utils/api/fetchRequest';
import {
    convertFromServerDetails,
    convertToServerDetails
} from '../../utils/api/conversions/profileDetails';
import { DETAILS_FORM_NAME } from '../../constants/formNames';

const MILISECONDS_TO_AUTO_DISMISS_ERROR = 2000;
const FAILED_UPDATE_DETAILS_MESSAGE = 'Updating details went grievously wrong…';
const FAILED_AUTHENTICATION_MESSAGE = 'Your authentication unhappily expired…';

const performAuthorizedRequest = async (dispatch, requestAction) => {
    try {
        return await requestAction();
    }
    catch (error) {
        if (error.statusCode === 401) {
            dispatch(invalidateToken());
            return dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE));
        }

        throw error;
    }
};

export const uploadUserDetails = (details) =>
    async (dispatch, getState) => {
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(USER_EMAIL);
        const serverDetails = convertToServerDetails(details);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchRequest(requestUri, authToken, serverDetails);
                const updatedDetails = convertFromServerDetails(receivedServerDetails);
                return dispatch(updateProfileDetails(updatedDetails));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }

        return dispatch(stopSubmit(DETAILS_FORM_NAME));
    };
