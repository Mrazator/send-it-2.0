export const API_ID = "a1e37f05-e225-40e0-aac1-c151ce92c59e"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const API_CHANNEL_URI = () => `${API_URI}/app/${API_ID}`
export const API_USER_URI = `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_ID}/user/${userEmail}`
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`
export const API_MESSAGES_URI = (channelId) => `${API_URI}/app/${API_ID}/channel/${channelId}/message`
