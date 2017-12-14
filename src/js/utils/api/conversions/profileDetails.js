export const convertFromServerDetails = (serverDetails) => ({
    email: serverDetails.email,
    customData: {...JSON.parse(serverDetails.customData)}
})


export const convertToServerDetails = (details) => JSON.stringify({
    customData: details.customData,
    email: undefined
})