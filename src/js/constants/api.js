export const API_ID = "fb99b9e0-2e73-450a-8585-fbfdeee522d4"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const channelsUri = () => `${API_URI}/app/${API_ID}`
export const apiUsers = () => `${API_URI}/${API_ID}/user`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
