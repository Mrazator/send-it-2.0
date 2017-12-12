export const API_ID = "ae7b5b76-c53a-4478-9829-3aaf14f37cbe"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const channelsUri = () => `${API_URI}/app/${API_ID}`
export const createApiUserUri = (email) => `${API_URI}/${API_ID}/user/${email}`
