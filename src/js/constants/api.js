export const API_ID = "a76ebe91-5f22-4893-91eb-c65c5cca057a"

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`
export const USER_EMAIL = 'whatever'

export const API_CHANNEL_URI = () => `${API_URI}/app/${API_ID}`
export const API_USER_URI = () => `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const apiUserEmail = (email) => `${API_URI}/${API_ID}/user/${email}`
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_ID}/user/${userEmail}`
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`
export const API_MESSAGES_URI = (channelId) => `${API_URI}/app/${API_ID}/channel/${channelId}/message`
