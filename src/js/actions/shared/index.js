import { fetchRequestFactory } from '../../utils/api/fetchRequest'
import { fetchReceiveFactory } from '../../utils/api/fetchReceive'
import { sharedAuthenticateUserFactory } from './sharedAuthenticateUser'
import { fetchPostUser } from '../../utils/api/fetchPostUser'
import { fetchAuthToken } from '../../utils/api/fetchAuthToken'

export const fetchReceive = fetchReceiveFactory(fetch)
export const fetchRequest = fetchRequestFactory(fetch)
export const sharedAuthenticateUser = sharedAuthenticateUserFactory({ fetchPostUser, fetchAuthToken })
