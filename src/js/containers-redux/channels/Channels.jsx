import {connect} from 'react-redux'
import {Channels} from "../../components/channels/Channels"

import {createChannel} from "../../actions/channels/createChannel";
import {getChannels} from "../../actions/channels/getChannels";

const mapStateToProps = (state, ownProps) => ({
    channels: state.channelManagement.channels,
    editedItemId: state.channelManagement.editedItemId,
    selectedItemId: state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(createChannel()),
    getChannels: () => dispatch(getChannels())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
