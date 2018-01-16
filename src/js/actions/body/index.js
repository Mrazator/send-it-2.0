import { fetchDelete } from '../../utils/api/fetchDelete'
import { actionDeleteMessageFactory } from './actionDeleteMessage'
import { actionLoadMessagesFactory } from './actionLoadMessages'
import { fetchReceive, fetchRequest } from '../shared'
import { actionPostMessageFactory } from './actionPostMessage'
import { actionVoteMessageFactory } from './actionVoteMessage'

export const actionDeleteMessage = actionDeleteMessageFactory(fetchDelete)
export const actionLoadMessages = actionLoadMessagesFactory({ fetchReceive })
export const actionPostMessage = actionPostMessageFactory({ fetchReceive, fetchRequest })
export const actionVoteMessage = actionVoteMessageFactory({ fetchRequest })
