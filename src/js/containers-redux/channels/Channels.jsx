import {connect} from 'react-redux'
import {Channels} from "../../components/channels/Channels"

import {actionCreateChannel} from "../../actions/channels/actionCreateChannel";
import {actionLoadChannels} from "../../actions/channels/actionLoadChannels";
import {channelsSavingFinished} from "../../actions/channels/actionCreators";

const mapStateToProps = (state, ownProps) => ({
    channels: state.channelManagement.channels,
    users: state.channelManagement.users,
    editedItemId: state.channelManagement.editedItemId,
    selectedItemId: state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actionCreateChannel()),
    getChannels: () => dispatch(actionLoadChannels()),
    savingEnded: () => dispatch(channelsSavingFinished())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
