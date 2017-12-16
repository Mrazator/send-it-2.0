export const uploadChannelUsers = (channel) =>
    (dispatch, getState) => {

        console.log(channel)
        // dispatch(savingStarted())
        //
        // const authToken = getState().shared.token
        // const requestUri = API_CHANNEL_URI()
        // const bodyJson = convertToServerChannelEdit(channel)
        //
        // return fetchRequest(requestUri, authToken, "PATCH", bodyJson)
        //     .then((server) => dispatch(updateChannel(channel)))
        //     .catch((error) => {
        //         if (error.statusCode === 401) {
        //             dispatch(invalidateToken());
        //             return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
        //         }
        //         throw error
        //     })
        //     .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
    }