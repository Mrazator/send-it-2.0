import { actionCreateChannelFactory } from './actionCreateChannel'
import { channelsAddChannel, channelsSavingStarted } from './actionCreators'

test('create channel dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please',
      email: 'email@email.com'
    }
  })

  const server = {
    id: '6308a8dd-26f3-443e-a390-657ccce24e24',
    channels: [
      {
        id: 'bc78e525-c9f7-4252-aae9-7242fcf096fe',
        name: 'Ahoj kamo privatni chat',
        customData: '{"owner":"ahoj@kamo.cz","users":"[]"}'
      }
    ]
  }

  const channel = {
    id: 'bc78e525-c9f7-4252-aae9-7242fcf096fe',
    name: 'Ahoj kamo privatni chat',
    customData: { owner: 'ahoj@kamo.cz', users: [] }
  }

  const createChannel = actionCreateChannelFactory(() => Promise.resolve(server))

  const dispatchable = createChannel()
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(channelsSavingStarted())
  expect(dispatch).toHaveBeenLastCalledWith(channelsAddChannel(channel))
  done()
})
