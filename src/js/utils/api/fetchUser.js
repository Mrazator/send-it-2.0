import { validateResponseLogin } from './validateResponseLogin'

export const fetchUser = (uri, method, email) => {
  const bodyJson = {
    email
  }

  return fetch(
    uri,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyJson)
    }
  )
    .then(validateResponseLogin)
}
