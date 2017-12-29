import { fetchReceive, fetchRequest } from '../shared'
import { actionCreateChannelFactory } from './actionCreateChannel'
import { actionDeleteChannelFactory } from './actionDeleteChannel'
import { actionEditChannelFactory } from './actionEditChannel'
import { actionUploadChannelUsersFactory } from './actionUploadChannelUsers'
import { actionLoadChannelsFactory } from './actionLoadChannels'
import { actionLoadUsersFactory } from './actionLoadUsers'

export const actionCreateChannel = actionCreateChannelFactory(fetchRequest)
export const actionDeleteChannel = actionDeleteChannelFactory(fetchRequest)
export const actionEditChannel = actionEditChannelFactory(fetchRequest)
export const actionUploadChannelUsers = actionUploadChannelUsersFactory(fetchRequest)
export const actionLoadChannels = actionLoadChannelsFactory(fetchReceive)
export const actionLoadUsers = actionLoadUsersFactory(fetchReceive)
