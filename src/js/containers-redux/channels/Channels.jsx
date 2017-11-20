import { connect } from 'react-redux'
import { Channels } from "../../components/channels/Channels"
import {
  addChannel
} from "../../actions/channels/actionCreators"

const mapStateToProps = (state) => ({
  channels: state.channelManagement.channels,
  editedItemId: state.channelManagement.editedItemId
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(addChannel()),
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
