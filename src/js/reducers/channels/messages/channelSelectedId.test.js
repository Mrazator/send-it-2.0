import { channelSelectedId } from './channelSelectedId'
import { channelsSelectChannel } from '../../../actions/channels/actionCreators'

describe('channelSelectedId reducer', () => {
  test('channel item select', () => {
    const expectedId = 1
    const state = channelSelectedId(null, channelsSelectChannel(expectedId))
    expect(state).toEqual(expectedId)
  })
})
