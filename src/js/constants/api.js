export const API_ID = "9d9ddfda-851d-4ac4-9f59-528cc9fda45f"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const channelsUri = () => `${API_URI}/app/${API_ID}`
export const createApiUserUri = (email) => `${API_URI}/${API_ID}/user/${email}`
