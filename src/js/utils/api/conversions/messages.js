export const convertFromServerMessage = server => ({
  id: server.id,
  value: server.value,
  createdAt: server.createdAt,
  createdBy: server.createdBy,
  updatedAt: server.updatedAt,
  updatedBy: server.updatedBy,
  customData: JSON.parse(server.customData) || {}
})

export const convertFromServerMessages = server => server.map(x => convertFromServerMessage(x))
