import { channelsRemoveChannel, channelsSavingStarted } from './actionCreators'
import { actionDeleteChannelFactory } from './actionDeleteChannel'

test('delete channel dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      email: 'email@email.com'
    }
  })

  const channel = {
    id: 'bc78e525-c9f7-4252-aae9-7242fcf096fe',
    name: 'Ahoj kamo privatni chat',
    customData: { owner: 'ahoj@kamo.cz', users: [] }
  }

  const deleteChannel = actionDeleteChannelFactory(() => Promise.resolve({}))

  const dispatchable = deleteChannel(channel.id)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(channelsSavingStarted())
  expect(dispatch).toHaveBeenLastCalledWith(channelsRemoveChannel(channel.id))
  done()
})
