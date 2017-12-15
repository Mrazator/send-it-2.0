import {API_CHANNEL_URI} from "../../constants/api";
import {fetchRequest} from "../../utils/api/fetchRequest";
import {failAuthentication, invalidateToken} from "../shared/actionCreators";
import {failFetchingProfileDetails} from "../profile/actionCreators";
import {EXPIRED_AUTHENTICATION_MESSAGE, FAILED_FETCH_DETAILS_MESSAGE} from "../../constants/uiConstants";
import {addChannel, savingStarted} from "./actionCreators";
import {
    convertFromServer,
    convertFromServerChannel,
    convertToServerChannelCreate
} from "../../utils/api/conversions/channel";

export const createChannel = () =>
    (dispatch, getState) => {
        dispatch(savingStarted())

        const authToken = getState().shared.token
        const requestUri = API_CHANNEL_URI()
        const bodyJson = convertToServerChannelCreate(getState().profile.details.email, [])

        return fetchRequest(requestUri, authToken, "PATCH", bodyJson)
            .then((server) => dispatch(addChannel(convertFromServer(convertFromServerChannel(server)))))
            .catch((error) => {
                if (error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error
            })
            .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
}