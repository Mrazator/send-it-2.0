import {
  convertFromServerChannel, convertFromServerChannels, convertToServerCreateChannelFactory,
  convertToServerDeleteChannel, convertToServerEditChannel,
  getFromServerLastChannel
} from './channel'
import { uuid } from '../../uuid'

describe('channel conversions', () => {
  const channelServer1 = {
    id: 'c775aeda-034a-4962-98c0-9b9c4f8dc220',
    name: 'private chat',
    customData: '{"owner":"selepko121@gmail.com","users":"[\\"kacka@kacka.com\\"]"}'
  }

  const channelServer2 = {
    id: 'c775aeda-034a-4962-98c0-9b9c4f8dc223',
    name: 'private chat2',
    customData: '{"owner":"owner@owner.cz","users":"[]"}'
  }

  const channelConverted1 = {
    id: 'c775aeda-034a-4962-98c0-9b9c4f8dc220',
    name: 'private chat',
    customData: { owner: 'selepko121@gmail.com', users: ['kacka@kacka.com'] }
  }


  test('convertFromServerChannel', () => {
    expect(convertFromServerChannel(channelServer1)).toEqual(channelConverted1)
  })

  test('convertFromServerChannels', () => {
    const obj = { channels: [channelServer1, channelServer2] }
    expect(convertFromServerChannels(obj, 'kacka@kacka.com')[0]).toEqual(channelConverted1)
  })

  test('getFromServerLastChannel', () => {
    const obj = { channels: [channelServer1, channelServer2] }
    expect(getFromServerLastChannel(obj)).toEqual(channelServer2)
  })

  test('convertToServerCreateChannelFactory', () => {
    const id = uuid()
    const expectValue = convertToServerCreateChannelFactory(id)('owner@owner.cz', ['jeden@necossss', 'dva@tri.cz'])
    expect(expectValue[0].value.id).toEqual(id)
  })

  test('convertToServerDeleteChannel', () => {
    const expected = [
      {
        path: '/channels/1',
        op: 'remove'
      }
    ]

    expect(convertToServerDeleteChannel(1)).toEqual(expected)
  })

  test('convertToServerEditChannel', () => {
    const expected = [{
      path: '/channels/c775aeda-034a-4962-98c0-9b9c4f8dc220',
      op: 'replace',
      value:
        {
          id: 'c775aeda-034a-4962-98c0-9b9c4f8dc220',
          name: 'private chat',
          customData: '{"owner":"selepko121@gmail.com","users":"[\\"kacka@kacka.com\\"]"}'
        }
    }]

    expect(convertToServerEditChannel(channelConverted1)).toEqual(expected)
  })
})
