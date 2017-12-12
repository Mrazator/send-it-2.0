import {uuid} from "../../uuid";

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
                    usersInChannel: users
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
                ...channel
            }
        }
    ]