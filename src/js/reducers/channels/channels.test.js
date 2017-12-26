import Immutable from 'immutable'
import { channels } from './channels'
import {
  channelsAddChannel, channelsRemoveChannel, channelsUpdate,
  channelsUpdateChannel
} from '../../actions/channels/actionCreators'

describe('channels reducer', () => {
  const channel1 = {
    id: 'ID - channel1',
    name: 'channel1',
    customData: {}
  }

  const channel2 = {
    id: 'ID - channel2',
    name: 'channel2',
    customData: {}
  }

  test('channels update', () => {
    const channelsArray = [channel1, channel2]
    const state = channels(Immutable.List(), channelsUpdate(channelsArray))
    expect(state).toEqual(Immutable.List(channelsArray))
  })

  test('channels item create', () => {
    const state = channels(Immutable.List([channel1]), channelsAddChannel(channel2))
    expect(state).toEqual(Immutable.List([channel1, channel2]))
  })

  test('channels item delete', () => {
    const state = channels(Immutable.List([channel1, channel2]), channelsRemoveChannel(channel2.id))
    expect(state).toEqual(Immutable.List([channel1]))
  })

  test('channels item update', () => {
    const newName = 'Test'
    const channel = { ...channel1 }
    channel.name = newName

    const state = channels(Immutable.List([channel1]), channelsUpdateChannel(channel))
    expect(state.first().name).toEqual(newName)
  })
})
