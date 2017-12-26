import { editingChannelId } from './editingChannelId'
import {
  channelsStartEditingChannel,
  channelsCancelEditingChannel,
  channelsUpdateChannel
} from '../../actions/channels/actionCreators'

describe('editingChannelId reducer', () => {
  it('channels item start editing id', () => {
    const expectedId = 5
    const state = editingChannelId(null, channelsStartEditingChannel(expectedId))
    expect(state).toBe(expectedId)
  })

  it('channels item cancel editing', () => {
    const state = editingChannelId(5, channelsCancelEditingChannel())
    expect(state).toBeNull()
  })

  it('channels item update', () => {
    const state = editingChannelId({ id: 5 }, channelsUpdateChannel({ id: 5 }))
    expect(state).toBeNull()
  })
})
