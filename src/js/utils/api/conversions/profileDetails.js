export const convertFromServerDetails = serverDetails => ({
  email: serverDetails.email,
  customData: { ...JSON.parse(serverDetails.customData) }
})
