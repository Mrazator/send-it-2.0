export const convertFromServerUsers = (server) => {

    return server.map(x => ({
            email: x.email,
            customData: JSON.parse(x.customData)
    }))
}