import { channelsLoadRegisteredUsers, channelsUsersSavingStarted } from './actionCreators'
import { actionLoadUsersFactory } from './actionLoadUsers'

test('load users dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const server = [
    {
      email: '',
      customData: '{"nickName":"","avatarId":""}'
    },
    {
      email: 'ahoj@coje.cz',
      customData: '{"nickName":"ahoj","avatarId":""}'
    }
  ]

  const users = [
    {
      email: '',
      customData: { nickName: '', avatarId: '' }
    },
    {
      email: 'ahoj@coje.cz',
      customData: { nickName: 'ahoj', avatarId: '' }
    }
  ]

  const loadUsers = actionLoadUsersFactory(() => Promise.resolve(server))

  const dispatchable = loadUsers()
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(channelsUsersSavingStarted())
  expect(dispatch).toHaveBeenLastCalledWith(channelsLoadRegisteredUsers(users))
  done()
})
