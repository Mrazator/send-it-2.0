export const convertFromServerDetails = (serverDetails) => ({
    email: serverDetails.email,
    ...JSON.parse(serverDetails.customData || '{}')
})


export const convertToServerDetails = (details) => JSON.stringify({
    customData: details.customData,
    email: undefined
})