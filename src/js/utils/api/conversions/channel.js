import {uuid} from "../../uuid";

export const convertFromServerChannel = (serverChannel) => ({
    ...serverChannel.channels[serverChannel.channels.length -1]
});

export const convertToServerChannel = (ownerEmail, users) =>
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