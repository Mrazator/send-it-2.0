import { convertFromServerMessage } from '../../utils/api/conversions/messages'
import { messageVote } from './actionCreators'
import { actionVoteMessageFactory } from './actionVoteMessage'

test('actionVoteMessageFactory dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please',
      email: 'email@email.com'
    }
  })

  const message = {
    value: 'guuu',
    customData: {
      avatarUri: 'https://pv247messaging.blob.core.windows.net/files/c4d35045-d939-4917-a0ba-e0a7967124e8/Screenshot ' +
      'from 2017-11-05 01-15-18.png?sv=2017-04-17&sr=b&sig=BpAMB4835lERzPrBmu%2FUqH0dNfvY' +
      '1PueZkpYUZ7ja1Q%3D&se=2018-12-21T14%3A31%3A08Z&sp=r',
      vote: 0
    }
  }

  const server = {
    id: 'f38c19be-5f43-46b9-85b5-2208ccff018e',
    value: 'guuu',
    createdAt: '2017-12-21T14:31:08.6098213Z',
    createdBy: 'email@email.com',
    updatedAt: '2017-12-21T14:31:08.6098213Z',
    updatedBy: 'email@email.com',
    customData: '{"avatarUri":"https://pv247messaging.blob.core.windows.net/files/c4d35045-d939-4917-a0ba-e0a' +
    '7967124e8/Screenshot from 2017-11-05 01-15-18.png?sv=2017-04-17&sr=b&sig=BpAMB4835lERzPrBmu%2FUqH0dNfvY' +
    '1PueZkpYUZ7ja1Q%3D&se=2018-12-21T14%3A31%3A08Z&sp=r","vote":1}'
  }

  const voteMessage = actionVoteMessageFactory({ fetchRequest: () => Promise.resolve(server) })

  const dispatchable = voteMessage(1, message)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenLastCalledWith(messageVote(convertFromServerMessage(server)))
  done()
})
