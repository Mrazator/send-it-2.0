import {removeChannel, savingStarted} from "./actionCreators";
import {channelsUri} from "../../constants/api";
import {convertToServerChannelDelete} from "../../utils/api/conversions/channel";
import {fetchRequest} from "../../utils/api/fetchRequest";
import {failAuthentication, invalidateToken} from "../shared/actionCreators";
import {EXPIRED_AUTHENTICATION_MESSAGE, FAILED_FETCH_DETAILS_MESSAGE} from "../../constants/uiConstants";
import {failFetchingProfileDetails} from "../profile/actionCreators";

export const deleteChannel = (channelId) =>
    (dispatch, getState) => {

        dispatch(savingStarted())

        const authToken = getState().shared.token
        const requestUri = channelsUri()
        const bodyJson = convertToServerChannelDelete(channelId)

        return fetchRequest(requestUri, authToken, "PATCH", bodyJson)
            .then((server) => dispatch(removeChannel(channelId)))
            .catch((error) => {
                if (error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error
            })
            .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
    }