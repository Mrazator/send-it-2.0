import { convertFromServerUsers } from './users'

describe('users', () => {
  const userServer1 = {
    email: 'email@email.com',
    customData: '{"nickName":"Bjorn2","avatarId":"c4d35045-d939-4917-a0ba-e0a7967124e8"}'
  }

  const userServer2 = {
    email: 'email@email2.com',
    customData: '{"nickName":"Bjorn2","avatarId":"c4d35045-d939-4917-a0ba-e0a7967124e8"}'
  }

  const userConverted1 = {
    email: 'email@email.com',
    customData: { nickName: 'Bjorn2', avatarId: 'c4d35045-d939-4917-a0ba-e0a7967124e8' }
  }

  const userConverted2 = {
    email: 'email@email2.com',
    customData: { nickName: 'Bjorn2', avatarId: 'c4d35045-d939-4917-a0ba-e0a7967124e8' }
  }

  test('convertFromServerUsers', () => {
    expect(convertFromServerUsers([userServer1, userServer2])).toEqual([userConverted1, userConverted2])
  })
})
