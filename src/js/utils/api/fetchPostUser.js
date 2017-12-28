import { validateResponseLogin } from './validateResponseLogin'

export const fetchPostUser = (uri, email) => {
  const custom = {
    nickName: email.slice(0, email.indexOf('@')),
    avatarId: ''
  }

  const bodyJson = {
    email,
    customData: JSON.stringify(custom)
  }

  return fetch(
    uri,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyJson)
    }
  )
    .then(validateResponseLogin)
}
