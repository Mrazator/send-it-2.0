import { connect } from 'react-redux'
import { Channels } from '../../components/channels/Channels'

import { channelsUsersSavingFinished } from '../../actions/channels/actionCreators'
import { actionCreateChannel, actionLoadChannels } from '../../actions/channels'

const mapStateToProps = state => ({
  channels: state.channelManagement.channels,
  users: state.channelManagement.users,
  editingChannelId: state.channelManagement.editingChannelId,
  selectedChannelId: state.channelManagement.selectedChannel.id
})

const mapDispatchToProps = dispatch => ({
  onCreateChannel: () => dispatch(actionCreateChannel()),
  onLoadChannels: () => dispatch(actionLoadChannels()),
  onSavingUsersFinished: () => dispatch(channelsUsersSavingFinished())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export { connectedComponent as ChannelsRedux }
