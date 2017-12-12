export const API_ID = "8c3df0b3-d9ab-4666-a28c-992a60a05ef3"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const channelsUri = () => `${API_URI}/app/${API_ID}`
export const createApiUserUri = (email) => `${API_URI}/${API_ID}/user/${email}`
