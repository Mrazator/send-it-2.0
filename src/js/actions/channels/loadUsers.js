import {API_USER_URI} from "../../constants/api";
import {loadRegisteredUsers, savingStarted} from "./actionCreators";
import {fetchReceive} from "../../utils/api/fetchReceive";
import {convertFromServerUsers} from "../../utils/api/conversions/users";

export const loadUsers = () =>
    (dispatch, getState) => {
        const authToken = getState().shared.token
        const requestUri = API_USER_URI

        dispatch(savingStarted())

        return fetchReceive(requestUri, authToken)
            .then((server) => {
                dispatch(loadRegisteredUsers(convertFromServerUsers(server)))
            })
            .catch((error) => console.log("load users error"))
    }