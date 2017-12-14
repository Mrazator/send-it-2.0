export const API_ID = "fb99b9e0-2e73-450a-8585-fbfdeee522d4"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const API_CHANNEL_URI = () => `${API_URI}/app/${API_ID}`
export const API_USER_URI = () => `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_ID}/user/${userEmail}`
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`
