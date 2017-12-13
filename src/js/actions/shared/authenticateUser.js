import {push} from 'connected-react-router'
import * as keys from "../../constants/localStorageKeys"
import {dismissError, receiveValidToken} from './actionCreators'
import {
    failAuthentication,
    startAuthentication
} from './actionCreators'
import {fetchAuthToken} from '../../utils/api/fetchAuthToken';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FAILED_AUTHENTICATION_MESSAGE
} from '../../constants/uiConstants'
import {fetchUser} from "../../utils/api/fetchUser";
import {apiUsers} from "../../constants/api";

export const authenticateUser = (destinationLocation, userEmail) =>
    (dispatch) => {
        dispatch(startAuthentication());

        return fetchUser(apiUsers(), "POST", userEmail)
            .then((response) => {
                    if (response) {
                        fetchAuthToken(userEmail)
                            .then((token) => {
                                dispatch(receiveValidToken(token));
                                dispatch(push(destinationLocation));
                                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
                            })
                    }
                }
            )
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            })
    };


