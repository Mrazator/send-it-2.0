import {connect} from 'react-redux'
import {Channels} from "../../components/channels/Channels"

import {actionCreateChannel} from "../../actions/channels/actionCreateChannel"
import {actionLoadChannels} from "../../actions/channels/actionLoadChannels"
import {channelsUsersSavingFinished} from "../../actions/channels/actionCreators"

const mapStateToProps = (state, ownProps) => ({
    channels: state.channelManagement.channels,
    users: state.channelManagement.users,
    editingChannelId: state.channelManagement.editingChannelId,
    selectedChannelId: state.channelManagement.selectedChannel.id
})

const mapDispatchToProps = (dispatch) => ({
    onCreateChannel: () => dispatch(actionCreateChannel()),
    onLoadChannels: () => dispatch(actionLoadChannels()),
    onSavingUsersFinished: () => dispatch(channelsUsersSavingFinished())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
