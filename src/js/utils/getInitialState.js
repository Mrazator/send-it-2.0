import { getInitialItems } from './getInitialItems'
import { getPersistedEmail, getPersistedToken } from './getPersistedToken'

export const getInitialState = () => ({
  channelManagement: {
    channels: getInitialItems(),
    isAddingUser: false
  },
  shared: {
    token: getPersistedToken(),
    email: getPersistedEmail()
  }
})
