import { convertFromServerDetails } from './profileDetails'

describe('profileDetails conversions', () => {
  const userServer = {
    email: 'email@email.com',
    customData: '{"nickName":"Bjorn2","avatarId":"c4d35045-d939-4917-a0ba-e0a7967124e8"}'
  }

  const userConverted = {
    email: 'email@email.com',
    customData: { nickName: 'Bjorn2', avatarId: 'c4d35045-d939-4917-a0ba-e0a7967124e8' }
  }

  test('convertFromServerDetails', () => {
    expect(convertFromServerDetails(userServer)).toEqual(userConverted)
  })
})
