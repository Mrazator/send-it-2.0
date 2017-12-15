export const API_ID = "414506d2-63f8-4072-ab49-82f8c3180e50"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const API_CHANNEL_URI = () => `${API_URI}/app/${API_ID}`
export const API_USER_URI = () => `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_ID}/user/${userEmail}`
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`
