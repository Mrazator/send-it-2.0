export const convertFromServerDetails = (serverDetails) => ({
    customData: serverDetails.customData,
    email: serverDetails.email,
});

export const convertToServerDetails = (details) => JSON.stringify({
    ...details,
    email: undefined,
});