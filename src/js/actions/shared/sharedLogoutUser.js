import {sharedInvalidateToken} from './actionCreators'
import * as keys from '../../constants/localStorageKeys'

export const sharedLogoutUser = () =>
    (dispatch) => {
        localStorage.removeItem(keys.SHARED_TOKEN);
        localStorage.removeItem(keys.SHARED_TOKEN_TIMESTAMP);

        dispatch(sharedInvalidateToken());
    }