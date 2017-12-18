import { uuid } from '../../uuid'

export const convertFromServerChannels = (server, owner) =>
  server.channels
    .map(x => convertFromServerChannel(x))
    .filter(x => x.customData.owner === owner) // || x.customData.users.filter(x => x === owner) !== []


export const convertFromServerChannel = (channel) => {
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

export const getFromServerLastChannel = serverChannel => ({
  ...serverChannel.channels[serverChannel.channels.length - 1]
})

export const convertToServerCreateChannel = (owner, users) =>
  [
    {
      path: '/channels/-',
      op: 'add',
      value: {
        id: uuid(),
        name: 'New channel',
        customData: JSON.stringify({
          owner,
          users: JSON.stringify(users)
        })
      }
    }
  ]

export const convertToServerDeleteChannel = channelId =>
  [
    {
      path: `/channels/${channelId}`,
      op: 'remove'
    }
  ]

export const convertToServerEditChannel = channel =>
  [
    {
      path: `/channels/${channel.id}`,
      op: 'replace',
      value: {
        ...channel,
        customData: JSON.stringify({
          owner: channel.customData.owner,
          users: JSON.stringify(channel.customData.users)
        })
      }
    }
  ]
