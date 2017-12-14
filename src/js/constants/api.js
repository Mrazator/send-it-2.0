export const API_ID = "63dd9595-330e-4c96-9629-eb7d202cb4e9"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const API_CHANNEL_URI = () => `${API_URI}/app/${API_ID}`
export const API_USER_URI = () => `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_ID}/user/${userEmail}`
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`
