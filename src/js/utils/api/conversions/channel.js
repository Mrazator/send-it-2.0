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

export const convertFromServerChannels = (server, owner) => server.channels
  .map(x => convertFromServerChannel(x))
  .filter(x =>
    x.customData &&
    (x.customData.owner === owner || (x.customData.users && x.customData.users.filter(y => y === owner).length !== 0)))

export const getFromServerLastChannel = serverChannels => ({
  ...serverChannels.channels[serverChannels.channels.length - 1]
})

export const convertToServerCreateChannelFactory = id => (owner, users) =>
  [
    {
      path: '/channels/-',
      op: 'add',
      value: {
        id,
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

export const convertToServerEditChannel = channel => [
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
