import { fetchRequestFactory } from '../../utils/api/fetchRequest'
import { fetchReceiveFactory } from '../../utils/api/fetchReceive'

export const fetchReceive = fetchReceiveFactory(fetch)
export const fetchRequest = fetchRequestFactory(fetch)
