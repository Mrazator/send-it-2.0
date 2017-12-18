export const API_ID = '6308a8dd-26f3-443e-a390-657ccce24e24'

const API_URI = 'https://pv247messaging.azurewebsites.net/api'

export const API_AUTH_URI = `${API_URI}/auth`

export const API_CHANNEL_URI = `${API_URI}/app/${API_ID}`
export const API_USER_URI = `${API_URI}/${API_ID}/user`
export const API_FILE_URI = `${API_URI}/file`
export const createApiUser = email => `${API_URI}/${API_ID}/user/${email}`
export const createApiFilerUri = fileId => `${API_URI}//file/${fileId}/download-link`
export const createMessageUri = channelId => `${API_URI}/app/${API_ID}/channel/${channelId}/message`
