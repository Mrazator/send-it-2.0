export const convertFromServerUsers = server => server.map(x => ({
  email: x.email,
  customData: JSON.parse(x.customData)
}))
