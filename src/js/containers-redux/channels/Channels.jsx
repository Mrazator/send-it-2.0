import {connect} from 'react-redux'
import {Channels} from "../../components/channels/Channels"

import {createChannel} from "../../actions/channels/createChannel";
import {getChannels} from "../../actions/channels/getChannels";
import {savingFinished} from "../../actions/channels/actionCreators";

const mapStateToProps = (state, ownProps) => ({
    channels: state.channelManagement.channels,
    users: state.channelManagement.users,
    editedItemId: state.channelManagement.editedItemId,
    selectedItemId: state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(createChannel()),
    getChannels: () => dispatch(getChannels()),
    savingEnded: () => dispatch(savingFinished())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
