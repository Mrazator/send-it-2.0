/* eslint-disable max-len */
import { convertFromServerMessage, convertFromServerMessages } from './messages'

describe('messages conversions', () => {
  const serverMessage1 = [
    {
      id: '1e90e82e-aa60-480a-92b5-b91b93b5b60d',
      value: 'copak?',
      createdAt: '2017-12-26T16:44:38.1650723Z',
      createdBy: 'selepko121@gmail.com',
      updatedAt: '2017-12-26T16:44:38.1650723Z',
      updatedBy: 'selepko121@gmail.com',
      customData: '{"avatarUri":"https://pv247messaging.blob.core.windows.net/files/ee79d252-68eb-4a6f-8a77-32d6cf3bb517/waqt-bohat-keemti-hai-laughing-colours-is-liye-apna-nahi-29027636.png?sv=2017-04-17&sr=b&sig=KHQ2MUsKsZSum4gscTmti2Ga7cmxRhakd1DfHElWTGw%3D&se=2018-12-26T16%3A44%3A38Z&sp=r","vote":0}'
    }
  ]

  const serverMessage2 = [
    {
      id: '2e90e82e-aa60-480a-92b5-b91b93b5b60d',
      value: 'copak?',
      createdAt: '2017-12-26T16:44:38.1650723Z',
      createdBy: 'selepko121@gmail.com',
      updatedAt: '2017-12-26T16:44:38.1650723Z',
      updatedBy: 'selepko121@gmail.com',
      customData: '{"avatarUri":"https://pv247messaging.blob.core.windows.net/files/ee79d252-68eb-4a6f-8a77-32d6cf3bb517/waqt-bohat-keemti-hai-laughing-colours-is-liye-apna-nahi-29027636.png?sv=2017-04-17&sr=b&sig=KHQ2MUsKsZSum4gscTmti2Ga7cmxRhakd1DfHElWTGw%3D&se=2018-12-26T16%3A44%3A38Z&sp=r","vote":0}'
    }
  ]

  const convertedMessage1 = {
    id: '1e90e82e-aa60-480a-92b5-b91b93b5b60d',
    value: 'copak?',
    createdAt: '2017-12-26T16:44:38.1650723Z',
    createdBy: 'selepko121@gmail.com',
    updatedAt: '2017-12-26T16:44:38.1650723Z',
    updatedBy: 'selepko121@gmail.com',
    customData:
      {
        avatarUri: 'https://pv247messaging.blob.core.windows.net/files/ee79d252-68eb-4a6f-8a77-32d6cf3bb517/waqt-bohat-keemti-hai-laughing-colours-is-liye-apna-nahi-29027636.png?sv=2017-04-17&sr=b&sig=KHQ2MUsKsZSum4gscTmti2Ga7cmxRhakd1DfHElWTGw%3D&se=2018-12-26T16%3A44%3A38Z&sp=r',
        vote: 0
      }
  }

  const convertedMessage2 = {
    id: '2e90e82e-aa60-480a-92b5-b91b93b5b60d',
    value: 'copak?',
    createdAt: '2017-12-26T16:44:38.1650723Z',
    createdBy: 'selepko121@gmail.com',
    updatedAt: '2017-12-26T16:44:38.1650723Z',
    updatedBy: 'selepko121@gmail.com',
    customData:
      {
        avatarUri: 'https://pv247messaging.blob.core.windows.net/files/ee79d252-68eb-4a6f-8a77-32d6cf3bb517/waqt-bohat-keemti-hai-laughing-colours-is-liye-apna-nahi-29027636.png?sv=2017-04-17&sr=b&sig=KHQ2MUsKsZSum4gscTmti2Ga7cmxRhakd1DfHElWTGw%3D&se=2018-12-26T16%3A44%3A38Z&sp=r',
        vote: 0
      }
  }

  test('convertFromServerMessage', () => {
    expect(convertFromServerMessage(serverMessage1[0])).toEqual(convertedMessage1)
  })

  test('convertFromServerMessages', () => {
    expect(convertFromServerMessages([serverMessage1[0], serverMessage2[0]])).toEqual([convertedMessage1, convertedMessage2])
  })
})
