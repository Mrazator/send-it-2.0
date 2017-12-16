import {uuid} from "../../uuid";

export const convertFromServerChannels = (server, owner) => {
    return server.channels
        .map(x => convertFromServer(x))
        .filter(x => x.customData.owner === owner) //|| x.customData.users.filter(x => x === owner) !== []
}

export const convertFromServer = (channel) => {
    const custom = JSON.parse(channel.customData)

    return {
        id: channel.id,
        name: channel.name,
        customData: {
            ...custom,
            users: JSON.parse(custom.users)
        }
    }
}

export const convertFromServerChannel = (serverChannel) => ({
    ...serverChannel.channels[serverChannel.channels.length - 1]
});

export const convertToServerChannelCreate = (ownerEmail, users) =>
    [
        {
            path: "/channels/-",
            op: "add",
            value: {
                id: uuid(),
                name: "New channel",
                customData: JSON.stringify({
                    owner: ownerEmail,
                    users: JSON.stringify(users)
                })
            }
        }
    ];

export const convertToServerChannelDelete = (channelId) =>
    [
        {
            path: "/channels/" + channelId,
            op: "remove"
        }
    ]

export const convertToServerChannelEdit = (channel) =>
    [
        {
            path: "/channels/" + channel.id,
            op: "replace",
            value: {
                ...channel,
                customData: JSON.stringify({
                    owner: channel.customData.owner,
                    users: JSON.stringify(channel.customData.users)
                })
            }
        }
    ]