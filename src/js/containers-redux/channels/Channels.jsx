import {connect} from 'react-redux'
import {Channels} from "../../components/channels/Channels"

import {createChannel} from "../../actions/channels/createChannel";

const mapStateToProps = (state) => ({
    channels: state.channelManagement.channels,
    editedItemId: state.channelManagement.editedItemId,
    selectedItemId: state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(createChannel())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
