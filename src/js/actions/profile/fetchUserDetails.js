import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails,
} from './actionCreators';
import {
    apiUserEmail
} from '../../constants/api';
import {invalidateToken, failAuthentication} from '../shared/actionCreators';
import {fetchReceive} from '../../utils/api/fetchReceive';

import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_DETAILS_MESSAGE
} from '../../constants/uiConstants'
import {fetchUserAvatar} from "./fetchUserAvatar";

export const fetchUserDetails = () =>
    (dispatch, getState) => {
        dispatch(startFetchingProfileDetails());

        const authToken = getState().shared.token;
        const requestUri = apiUserEmail(getState().profile.details.email);

        return fetchReceive(requestUri, authToken)
            .then((serverDetails) => dispatch(updateProfileDetails(serverDetails.email, JSON.parse(serverDetails.customData))))
            .then(({ payload: {customData: { avatarId } = {} } = {} }) => avatarId && dispatch(fetchUserAvatar(avatarId)))
            .catch((error) => {
                if (error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error;
            })
            .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)));
    };
